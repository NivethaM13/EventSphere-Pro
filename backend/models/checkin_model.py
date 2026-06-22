from sqlalchemy import Column, Integer, String
from database.database import Base

class CheckIn(Base):
    __tablename__ = "checkins"

    id = Column(Integer, primary_key=True, index=True)
    ticket_id = Column(String(100), unique=True)
    status = Column(String(50), default="Checked In")