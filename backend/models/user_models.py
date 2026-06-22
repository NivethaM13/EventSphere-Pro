from sqlalchemy import Column, Integer, String  # type: ignore[import]
from database.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String(100))
    email = Column(String(100), unique=True)
    password = Column(String(255))
    role = Column(String(50))

    phone = Column(String(20))
    address = Column(String(255))
    profile_image = Column(String(255))

    is_verified = Column(String(20), default="Pending")