import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import API from "../services/api";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await API.post(
        "/payment/create-payment-intent"
      );

      const clientSecret =
        response.data.client_secret;

      const result = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );

      if (result.error) {
        alert(result.error.message);
      } else {
         const qrResponse = await API.get(
  "/qr/generate-ticket/1"
);

const qrPath = qrResponse.data.qr_code;

window.location.href =
  `/ticket-success?qr=${encodeURIComponent(qrPath)}`;

  
      }
    } catch (error) {
      console.log(error);
      alert("Payment Failed");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <CardElement />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        {loading ? "Processing..." : "Pay ₹500"}
      </button>
    </form>
  );
}

export default CheckoutForm;