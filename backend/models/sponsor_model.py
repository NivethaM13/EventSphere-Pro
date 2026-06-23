from sqlalchemy import Column, Integer, String
from database.database import Base

class Sponsor(Base):
    __tablename__ = "sponsors"

    id = Column(Integer, primary_key=True, index=True)

    sponsor_name = Column(String(200))
    company_name = Column(String(200))
    package_type = Column(String(100))
    contact_email = Column(String(200))
    status = Column(String(50), default="Active")