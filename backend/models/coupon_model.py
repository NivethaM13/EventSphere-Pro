from sqlalchemy import Column, Integer, String, Float
from database.database import Base

class Coupon(Base):
    __tablename__ = "coupons"

    id = Column(Integer, primary_key=True, index=True)
    coupon_code = Column(String(50), unique=True)
    discount_percentage = Column(Float)
    status = Column(String(20), default="Active")