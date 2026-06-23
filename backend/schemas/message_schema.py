from pydantic import BaseModel

class MessageCreate(BaseModel):
    sender_email: str
    receiver_email: str
    message: str


class MessageResponse(BaseModel):
    id: int
    sender_email: str
    receiver_email: str
    message: str

    class Config:
        from_attributes = True