from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from models.language_model import LanguagePreference
from schemas.language_schema import LanguageCreate

router = APIRouter(
    prefix="/language",
    tags=["Language Preferences"]
)

@router.post("/save")
def save_language(
    data: LanguageCreate,
    db: Session = Depends(get_db)
):
    language = LanguagePreference(
        user_email=data.user_email,
        language=data.language
    )

    db.add(language)
    db.commit()

    return {
        "message": "Language Saved"
    }


@router.get("/")
def get_languages(
    db: Session = Depends(get_db)
):
    return db.query(LanguagePreference).all()