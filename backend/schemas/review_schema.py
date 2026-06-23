from pydantic import BaseModel

class ReviewCreate(BaseModel):
    user_id: int
    event_id: int
    rating: int
    review: str


class ReviewResponse(BaseModel):
    id: int
    user_id: int
    event_id: int
    rating: int
    review: str

    class Config:
        from_attributes = True