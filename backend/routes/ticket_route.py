from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from models.ticket_model import Ticket
from schemas.ticket_schema import TicketCreate

router = APIRouter()


@router.post("/create-ticket")
def create_ticket(
    ticket: TicketCreate,
    db: Session = Depends(get_db)
):
    new_ticket = Ticket(
        event_id=ticket.event_id,
        ticket_type=ticket.ticket_type,
        price=ticket.price,
        quantity=ticket.quantity,
        available_tickets=ticket.quantity
    )

    db.add(new_ticket)
    db.commit()
    db.refresh(new_ticket)

    return {
        "message": "Ticket Created Successfully"
    }


@router.get("/tickets")
def get_all_tickets(
    db: Session = Depends(get_db)
):
    return db.query(Ticket).all()