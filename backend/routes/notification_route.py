from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from models.notification_model import Notification
from schemas.notification_schema import NotificationCreate

router = APIRouter()


@router.post("/create")
def create_notification(
    data: NotificationCreate,
    db: Session = Depends(get_db)
):
    notification = Notification(
        user_email=data.user_email,
        message=data.message
    )

    db.add(notification)
    db.commit()
    db.refresh(notification)

    return {
        "message": "Notification Created Successfully"
    }


@router.get("/all")
def get_notifications(
    db: Session = Depends(get_db)
):
    return db.query(Notification).all()


@router.put("/read/{notification_id}")
def mark_as_read(
    notification_id: int,
    db: Session = Depends(get_db)
):
    notification = db.query(Notification).filter(
        Notification.id == notification_id
    ).first()

    if notification:
        notification.status = "Read"
        db.commit()

    return {
        "message": "Notification Marked As Read"
    }