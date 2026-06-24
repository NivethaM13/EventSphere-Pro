from fastapi import APIRouter

router = APIRouter(
    prefix="/bi-dashboard",
    tags=["Business Intelligence"]
)

@router.get("/")
def get_dashboard():

    return {
        "popular_events": 25,
        "top_organizers": 8,
        "revenue_growth": 18,
        "booking_trends": 120,
        "platform_users": 450
    }