import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Tl40yHkgfDeHswmFtE8Qfjt99WquotwLkRtsk2Lqs6SmSBGgHQkg05TMCeDnLHBLl0gduvKoqdHKY0h2NxrTgZZ00qwlCBB2u"
);

function TicketBooking() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>🎟 Ticket Booking</h1>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          maxWidth: "600px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Tech Conference 2026</h2>

        <p>Price: ₹500</p>

        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}

export default TicketBooking;