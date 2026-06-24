from sqlalchemy import Column, Integer, String
from database.database import Base

class LanguagePreference(Base):
    __tablename__ = "language_preferences"

    id = Column(Integer, primary_key=True, index=True)
    user_email = Column(String(255))
    language = Column(String(50))