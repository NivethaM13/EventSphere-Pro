from sqlalchemy import Column, Integer, String
from database.database import Base

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True, index=True)

    action = Column(String(255))
    user_email = Column(String(255))
    status = Column(String(100))