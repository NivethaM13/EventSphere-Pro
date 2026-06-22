from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database.database import get_db
from models.booking_model import Booking
from models.ticket_model import Ticket
from schemas.booking_schema import BookingCreate

router = APIRouter()


@router.post("/create-booking")
def create_booking(
    booking: BookingCreate,
    db: Session = Depends(get_db)
):
    ticket = db.query(Ticket).filter(
        Ticket.id == booking.ticket_id
    ).first()

    if not ticket:
        raise HTTPException(
            status_code=404,
            detail="Ticket not found"
        )

    if ticket.available_tickets < booking.quantity:
        raise HTTPException(
            status_code=400,
            detail="Not enough tickets available"
        )

    ticket.available_tickets -= booking.quantity

    new_booking = Booking(
        user_email=booking.user_email,
        event_id=booking.event_id,
        ticket_id=booking.ticket_id,
        quantity=booking.quantity,
        booking_status="Confirmed"
    )

    db.add(new_booking)
    db.commit()
    db.refresh(new_booking)

    return {
        "message": "Booking Confirmed",
        "booking_id": new_booking.id
    }


@router.get("/bookings")
def get_bookings(
    db: Session = Depends(get_db)
):
    return db.query(Booking).all()