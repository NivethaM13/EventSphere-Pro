from sqlalchemy import Column, Integer, String
from database.database import Base

class LiveStream(Base):
    __tablename__ = "live_streams"

    id = Column(Integer, primary_key=True, index=True)

    event_name = Column(String(200))
    stream_url = Column(String(500))
    status = Column(String(50), default="Scheduled")