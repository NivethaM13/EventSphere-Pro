from sqlalchemy import Column, Integer, String, Float
from database.database import Base


class Ticket(Base):
    __tablename__ = "tickets"

    id = Column(Integer, primary_key=True, index=True)

    event_id = Column(Integer)

    ticket_type = Column(String(100))

    price = Column(Float)

    quantity = Column(Integer)

    available_tickets = Column(Integer)