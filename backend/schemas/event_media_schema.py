from pydantic import BaseModel


class EventMediaResponse(BaseModel):
    id: int
    event_id: int
    image_url: str

    class Config:
        from_attributes = True