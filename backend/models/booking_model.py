from sqlalchemy import Column, Integer, String
from database.database import Base


class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)

    user_email = Column(String(255))

    event_id = Column(Integer)

    ticket_id = Column(Integer)

    quantity = Column(Integer)

    booking_status = Column(String(100), default="Confirmed")