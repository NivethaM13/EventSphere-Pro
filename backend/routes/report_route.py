from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from fastapi.responses import FileResponse
import csv
from reportlab.pdfgen import canvas

from database.database import get_db
from models.booking_model import Booking

router = APIRouter(
    prefix="/reports",
    tags=["Reports"]
)

@router.get("/bookings")
def booking_report(
    db: Session = Depends(get_db)
):
    bookings = db.query(Booking).all()

    return {
    "total_bookings": len(bookings),
    "total_revenue": len(bookings) * 500,
    "total_users": len(set(
        [booking.user_email for booking in bookings]
    )),
    "total_tickets": len(bookings),
    "data": bookings
}

@router.get("/export-csv")
def export_csv(
    db: Session = Depends(get_db)
):
    bookings = db.query(Booking).all()

    filename = "booking_report.csv"

    with open(filename, "w", newline="") as file:
        writer = csv.writer(file)

        writer.writerow([
            "Booking ID",
            "User",
            "Event ID",
            "Status"
        ])

        for booking in bookings:
            writer.writerow([
                booking.id,
                booking.user_email,
                booking.event_id,
                booking.booking_status
            ])

    return FileResponse(
        filename,
        media_type="text/csv",
        filename=filename
    )


@router.get("/export-pdf")
def export_pdf(
    db: Session = Depends(get_db)
):
    bookings = db.query(Booking).all()

    filename = "booking_report.pdf"

    pdf = canvas.Canvas(filename)

    pdf.drawString(
        100,
        800,
        "EventSphere Booking Report"
    )

    y = 760

    for booking in bookings:
        pdf.drawString(
            100,
            y,
            f"Booking {booking.id} - {booking.user_email}"
        )

        y -= 20

    pdf.save()

    return FileResponse(
        filename,
        media_type="application/pdf",
        filename=filename
    )