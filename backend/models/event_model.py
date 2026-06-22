from sqlalchemy import Column, Integer, String, Date
from database.database import Base


class Event(Base):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(200))
    description = Column(String(500))
    venue = Column(String(200))

    event_date = Column(Date)

    category = Column(String(100))

    organizer_email = Column(String(100))

    status = Column(
        String(50),
        default="Upcoming"
    )