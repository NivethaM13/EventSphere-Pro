from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.payment_route import router as payment_router
from routes.qr_route import router as qr_router

from routes.notification_route import router as notification_router
from models.notification_model import Notification

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

from models.audit_log_model import AuditLog
from routes.audit_log_route import router as audit_log_router

from models.live_stream_model import LiveStream
from routes.live_stream_route import router as live_stream_router

from models.seat_model import Seat

from routes.review_route import router as review_router

from models.message_model import Message
from routes.coupon_route import router as coupon_router
from models.refund_model import Refund

from routes.message_route import router as message_router

from models.sponsor_model import Sponsor
from routes.sponsor_route import router as sponsor_router

from routes.report_route import router as report_router

from models.ticket_model import Ticket
from routes.ticket_route import router as ticket_router

from routes.bi_dashboard_route import router as bi_dashboard_router

from models.language_model import LanguagePreference
from routes.language_route import router as language_router

from routes.refund_route import router as refund_router
from routes.ai_assistant_route import router as ai_router

from models.booking_model import Booking
from routes.booking_route import router as booking_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="EventSphere Pro")
app.include_router(
    ticket_router,
    prefix="/ticket",
    tags=["Ticket Management"]
)
app.include_router(review_router)
app.include_router(audit_log_router)
app.include_router(sponsor_router)
app.include_router(report_router)
app.include_router(coupon_router)
app.include_router(refund_router)
app.include_router(language_router)
app.include_router(ai_router)
app.include_router(live_stream_router)
app.include_router(bi_dashboard_router)

app.include_router(
    message_router,
    prefix="/message",
    tags=["Messaging"]
)


app.include_router(
    wishlist_router,
    prefix="/wishlist",
    tags=["Wishlist"]
)

app.include_router(
    notification_router,
    prefix="/notification",
    tags=["Notifications"]
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