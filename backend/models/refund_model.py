from sqlalchemy import Column, Integer, String, ForeignKey
from database.database import Base

class Refund(Base):
    __tablename__ = "refunds"

    id = Column(Integer, primary_key=True, index=True)

    booking_id = Column(Integer, ForeignKey("bookings.id"))
    reason = Column(String(255))
    refund_status = Column(String(50), default="Pending")