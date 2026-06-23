from pydantic import BaseModel

class CouponCreate(BaseModel):
    coupon_code: str
    discount_percentage: float

class CouponResponse(BaseModel):
    id: int
    coupon_code: str
    discount_percentage: float
    status: str

    class Config:
        from_attributes = True