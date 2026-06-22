from pydantic import BaseModel

class CheckInCreate(BaseModel):
    ticket_id: str

class CheckInResponse(BaseModel):
    id: int
    ticket_id: str
    status: str

    class Config:
        from_attributes = True