from fastapi import APIRouter, Query

router = APIRouter(
    prefix="/ai",
    tags=["AI Assistant"]
)

@router.post("/ask")
def ask_ai(question: str = Query(...)):

    question = question.lower()

    if "ticket" in question:
        answer = "You can book tickets from the Ticket Booking page."

    elif "refund" in question:
        answer = "Refund requests can be submitted from the Refund Management page."

    elif "coupon" in question:
        answer = "Coupons can be applied during checkout if available."

    elif "event" in question:
        answer = "Browse events from the Events page."

    else:
        answer = "Sorry, I don't have an answer for that question."

    return {
        "question": question,
        "answer": answer
    }