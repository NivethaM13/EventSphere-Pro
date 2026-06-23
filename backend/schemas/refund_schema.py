from pydantic import BaseModel

class RefundCreate(BaseModel):
    booking_id: int
    reason: str


class RefundResponse(BaseModel):
    id: int
    booking_id: int
    reason: str
    refund_status: str

    class Config:
        from_attributes = True