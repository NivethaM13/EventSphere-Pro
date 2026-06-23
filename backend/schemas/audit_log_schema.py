from pydantic import BaseModel

class AuditLogCreate(BaseModel):
    action: str
    user_email: str
    status: str