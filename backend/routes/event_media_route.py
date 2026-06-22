from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session
import os

from database.database import get_db
from models.event_media_model import EventMedia

router = APIRouter()

UPLOAD_FOLDER = "uploads"

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


@router.post("/upload-media/{event_id}")
async def upload_media(
    event_id: int,
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    file_path = f"{UPLOAD_FOLDER}/{file.filename}"

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    media = EventMedia(
        event_id=event_id,
        image_url=file_path
    )

    db.add(media)
    db.commit()
    db.refresh(media)

    return {
        "message": "Image Uploaded Successfully",
        "file_path": file_path
    }


@router.get("/media")
def get_all_media(
    db: Session = Depends(get_db)
):
    return db.query(EventMedia).all()