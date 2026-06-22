from sqlalchemy import Column, Integer, String
from database.database import Base

class Wishlist(Base):
    __tablename__ = "wishlists"

    id = Column(Integer, primary_key=True, index=True)
    user_email = Column(String(100))
    event_title = Column(String(200))