from pydantic import BaseModel

class WishlistCreate(BaseModel):
    user_email: str
    event_title: str