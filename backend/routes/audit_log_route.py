from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from models.audit_log_model import AuditLog
from schemas.audit_log_schema import AuditLogCreate

router = APIRouter(
    prefix="/audit-logs",
    tags=["Audit Logs"]
)

@router.post("/add")
def add_log(
    data: AuditLogCreate,
    db: Session = Depends(get_db)
):
    log = AuditLog(**data.dict())

    db.add(log)
    db.commit()
    db.refresh(log)

    return {
        "message": "Audit Log Added"
    }

@router.get("/")
def get_logs(
    db: Session = Depends(get_db)
):
    return db.query(AuditLog).all()