from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.payment_route import router as payment_router
from routes.qr_route import router as qr_router

from routes.checkin_route import router as checkin_router
from routes.seat_route import router as seat_router

from database.database import engine, Base
from routes.auth_route import router as auth_router
from routes.category_route import router as category_router
from models.category_model import Category
from models.event_model import Event
from routes.event_route import router as event_router
from models.event_media_model import EventMedia
from routes.event_media_route import router as event_media_router
from fastapi.staticfiles import StaticFiles
from routes.wishlist_route import router as wishlist_router
from models.wishlist_model import Wishlist
from models.checkin_model import CheckIn
from models.seat_model import Seat

from models.ticket_model import Ticket
from routes.ticket_route import router as ticket_router

from models.booking_model import Booking
from routes.booking_route import router as booking_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="EventSphere Pro")
app.include_router(
    ticket_router,
    prefix="/ticket",
    tags=["Ticket Management"]
)

app.include_router(
    wishlist_router,
    prefix="/wishlist",
    tags=["Wishlist"]
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads"
)

app.include_router(
    qr_router,
    prefix="/qr",
    tags=["QR Tickets"]
)

app.include_router(
    payment_router,
    prefix="/payment",
    tags=["Payments"]
)

app.include_router(
    checkin_router,
    prefix="/checkin",
    tags=["Check-In"]
)

app.include_router(
    event_router,
    prefix="/event",
    tags=["Event Management"]
)
app.include_router(
    booking_router,
    prefix="/booking",
    tags=["Booking Management"]
)

app.include_router(
    seat_router,
    prefix="/seat",
    tags=["Seat Management"]
)

app.include_router(
    category_router,
    prefix="/category",
    tags=["Category Management"]
)

app.include_router(
    event_media_router,
    prefix="/media",
    tags=["Event Media"]
)

app.include_router(
    auth_router,
    prefix="/auth",
    tags=["Authentication"]
)

@app.get("/")
def home():
    return {
        "message": "EventSphere Pro API Running"
    }