from pydantic import BaseModel


class BookingCreate(BaseModel):
    user_email: str
    event_id: int
    ticket_id: int
    quantity: int