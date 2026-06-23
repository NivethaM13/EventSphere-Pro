from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from models.review_model import Review
from schemas.review_schema import ReviewCreate

router = APIRouter(
    prefix="/reviews",
    tags=["Reviews"]
)

@router.post("/add")
def add_review(
    data: ReviewCreate,
    db: Session = Depends(get_db)
):
    review = Review(**data.dict())

    db.add(review)
    db.commit()
    db.refresh(review)

    return {
        "message": "Review Added Successfully"
    }


@router.get("/")
def get_reviews(
    db: Session = Depends(get_db)
):
    return db.query(Review).all()