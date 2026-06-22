from pydantic import BaseModel

class SeatCreate(BaseModel):
    seat_number: str

class SeatResponse(BaseModel):
    id: int
    seat_number: str
    status: str

    class Config:
        from_attributes = True