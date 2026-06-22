from pydantic import BaseModel


class TicketCreate(BaseModel):
    event_id: int
    ticket_type: str
    price: float
    quantity: int


class TicketResponse(BaseModel):
    id: int
    event_id: int
    ticket_type: str
    price: float
    quantity: int
    available_tickets: int

    class Config:
        from_attributes = True