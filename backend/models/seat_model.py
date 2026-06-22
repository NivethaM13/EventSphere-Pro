from sqlalchemy import Column, Integer, String
from database.database import Base

class Seat(Base):
    __tablename__ = "seats"

    id = Column(Integer, primary_key=True, index=True)
    seat_number = Column(String(20))
    status = Column(String(50), default="Available")