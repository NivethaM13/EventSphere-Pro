from sqlalchemy import Column, Integer, String
from database.database import Base

class Message(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True)

    sender_email = Column(String(100))
    receiver_email = Column(String(100))
    message = Column(String(500))