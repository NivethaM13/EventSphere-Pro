from pydantic import BaseModel

class LanguageCreate(BaseModel):
    user_email: str
    language: str