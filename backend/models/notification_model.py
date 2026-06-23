from sqlalchemy import Column, Integer, String
from database.database import Base

class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)

    user_email = Column(String(100))
    message = Column(String(500))
    status = Column(String(50), default="Unread")