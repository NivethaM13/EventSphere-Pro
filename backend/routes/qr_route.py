from fastapi import APIRouter
import qrcode

router = APIRouter()

@router.get("/generate-ticket/{ticket_id}")
def generate_qr(ticket_id: int):

    img = qrcode.make(
        f"EventSphere Ticket ID: {ticket_id}"
    )

    file_path = f"uploads/ticket_{ticket_id}.png"

    img.save(file_path)

    return {
        "message": "QR Generated Successfully",
        "qr_code": file_path
    }