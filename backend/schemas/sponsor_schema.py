from pydantic import BaseModel

class SponsorCreate(BaseModel):
    sponsor_name: str
    company_name: str
    package_type: str
    contact_email: str


class SponsorResponse(BaseModel):
    id: int
    sponsor_name: str
    company_name: str
    package_type: str
    contact_email: str
    status: str

    class Config:
        from_attributes = True