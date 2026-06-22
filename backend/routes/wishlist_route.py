from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from models.wishlist_model import Wishlist
from schemas.wishlist_schema import WishlistCreate

router = APIRouter()


@router.post("/add")
def add_wishlist(
    data: WishlistCreate,
    db: Session = Depends(get_db)
):
    wishlist = Wishlist(
        user_email=data.user_email,
        event_title=data.event_title
    )

    db.add(wishlist)
    db.commit()
    db.refresh(wishlist)

    return {
        "message": "Added To Wishlist"
    }


@router.get("/all")
def get_wishlist(
    db: Session = Depends(get_db)
):
    return db.query(Wishlist).all()


@router.delete("/delete/{wishlist_id}")
def delete_wishlist(
    wishlist_id: int,
    db: Session = Depends(get_db)
):
    wishlist = db.query(Wishlist).filter(
        Wishlist.id == wishlist_id
    ).first()

    if wishlist:
        db.delete(wishlist)
        db.commit()

    return {
        "message": "Removed From Wishlist"
    }