from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.database import get_db
from models.checkin_model import CheckIn
from schemas.checkin_schema import CheckInCreate

router = APIRouter()

@router.post("/check-in")
def check_in(data: CheckInCreate, db: Session = Depends(get_db)):

    record = CheckIn(
        ticket_id=data.ticket_id,
        status="Checked In"
    )

    db.add(record)
    db.commit()
    db.refresh(record)

    return {
        "message": "Check-In Successful",
        "data": record
    }

@router.get("/attendance")
def get_attendance(db: Session = Depends(get_db)):
    return db.query(CheckIn).all()