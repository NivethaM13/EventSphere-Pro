from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from models.message_model import Message
from schemas.message_schema import MessageCreate

router = APIRouter()


@router.post("/send")
def send_message(
    data: MessageCreate,
    db: Session = Depends(get_db)
):
    message = Message(
        sender_email=data.sender_email,
        receiver_email=data.receiver_email,
        message=data.message
    )

    db.add(message)
    db.commit()
    db.refresh(message)

    return {
        "message": "Message Sent Successfully"
    }


@router.get("/all")
def get_messages(
    db: Session = Depends(get_db)
):
    return db.query(Message).all()


@router.get("/inbox/{email}")
def get_inbox(
    email: str,
    db: Session = Depends(get_db)
):
    return db.query(Message).filter(
        Message.receiver_email == email
    ).all()