from sqlalchemy import Column, Integer, String
from database.database import Base


class EventMedia(Base):
    __tablename__ = "event_media"

    id = Column(Integer, primary_key=True, index=True)

    event_id = Column(Integer)

    image_url = Column(String(255))