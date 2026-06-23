from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from models.refund_model import Refund
from schemas.refund_schema import RefundCreate

router = APIRouter(
    prefix="/refunds",
    tags=["Refunds"]
)

@router.post("/request")
def request_refund(
    data: RefundCreate,
    db: Session = Depends(get_db)
):
    refund = Refund(**data.dict())

    db.add(refund)
    db.commit()
    db.refresh(refund)

    return {
        "message": "Refund Request Submitted"
    }


@router.get("/")
def get_refunds(
    db: Session = Depends(get_db)
):
    return db.query(Refund).all()