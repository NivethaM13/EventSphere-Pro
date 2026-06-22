from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.database import get_db
from models.seat_model import Seat
from schemas.seat_schema import SeatCreate

router = APIRouter()

@router.post("/create")
def create_seat(
    data: SeatCreate,
    db: Session = Depends(get_db)
):
    seat = Seat(
        seat_number=data.seat_number
    )

    db.add(seat)
    db.commit()
    db.refresh(seat)

    return seat


@router.get("/all")
def get_all_seats(
    db: Session = Depends(get_db)
):
    return db.query(Seat).all()


@router.put("/book/{seat_id}")
def book_seat(
    seat_id: int,
    db: Session = Depends(get_db)
):
    seat = db.query(Seat).filter(
        Seat.id == seat_id
    ).first()

    seat.status = "Booked"

    db.commit()

    return {
        "message": "Seat Reserved"
    }