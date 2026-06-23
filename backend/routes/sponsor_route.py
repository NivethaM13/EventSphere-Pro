from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from models.sponsor_model import Sponsor
from schemas.sponsor_schema import SponsorCreate

router = APIRouter(
    prefix="/sponsors",
    tags=["Sponsors"]
)

@router.post("/add")
def add_sponsor(
    data: SponsorCreate,
    db: Session = Depends(get_db)
):
    sponsor = Sponsor(**data.dict())

    db.add(sponsor)
    db.commit()
    db.refresh(sponsor)

    return {
        "message": "Sponsor Added Successfully"
    }


@router.get("/")
def get_sponsors(
    db: Session = Depends(get_db)
):
    return db.query(Sponsor).all()