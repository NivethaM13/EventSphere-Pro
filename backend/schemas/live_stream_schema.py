from pydantic import BaseModel

class LiveStreamCreate(BaseModel):
    event_name: str
    stream_url: str

class LiveStreamResponse(BaseModel):
    id: int
    event_name: str
    stream_url: str
    status: str

    class Config:
        from_attributes = True