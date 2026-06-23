from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from models.coupon_model import Coupon
from schemas.coupon_schema import CouponCreate

router = APIRouter(
    prefix="/coupons",
    tags=["Coupons"]
)

@router.post("/add")
def add_coupon(
    data: CouponCreate,
    db: Session = Depends(get_db)
):
    coupon = Coupon(**data.dict())

    db.add(coupon)
    db.commit()
    db.refresh(coupon)

    return {
        "message": "Coupon Created Successfully"
    }


@router.get("/")
def get_coupons(
    db: Session = Depends(get_db)
):
    return db.query(Coupon).all()


@router.get("/validate/{coupon_code}")
def validate_coupon(
    coupon_code: str,
    db: Session = Depends(get_db)
):
    coupon = db.query(Coupon).filter(
        Coupon.coupon_code == coupon_code
    ).first()

    if not coupon:
        return {
            "valid": False,
            "message": "Invalid Coupon"
        }

    return {
        "valid": True,
        "discount": coupon.discount_percentage
    }