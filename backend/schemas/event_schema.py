from pydantic import BaseModel
from datetime import date


class EventCreate(BaseModel):
    title: str
    description: str
    venue: str
    event_date: date
    category: str
    organizer_email: str


class EventResponse(BaseModel):
    id: int
    title: str
    description: str
    venue: str
    event_date: date
    category: str
    organizer_email: str
    status: str

    class Config:
        from_attributes = True


class EventUpdate(BaseModel):
    title: str
    description: str
    venue: str
    category: str