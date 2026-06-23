from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from models.live_stream_model import LiveStream
from schemas.live_stream_schema import LiveStreamCreate

router = APIRouter(
    prefix="/live-stream",
    tags=["Live Streaming"]
)

@router.post("/add")
def create_stream(
    data: LiveStreamCreate,
    db: Session = Depends(get_db)
):
    stream = LiveStream(**data.dict())

    db.add(stream)
    db.commit()
    db.refresh(stream)

    return {
        "message": "Live Stream Created Successfully"
    }

@router.get("/")
def get_streams(
    db: Session = Depends(get_db)
):
    return db.query(LiveStream).all()