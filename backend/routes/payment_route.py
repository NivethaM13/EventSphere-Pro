from fastapi import APIRouter
import stripe
from utils.stripe_config import *

router = APIRouter()

@router.post("/create-payment-intent")
def create_payment_intent():
    intent = stripe.PaymentIntent.create(
        amount=50000,  # ₹500.00
        currency="inr",
        payment_method_types=["card"]
    )

    return {
        "client_secret": intent.client_secret
    }