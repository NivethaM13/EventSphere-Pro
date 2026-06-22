import { useLocation } from "react-router-dom";

function TicketSuccess() {
  const location = useLocation();

  const params = new URLSearchParams(
    location.search
  );

  const qr = params.get("qr");

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>🎉 Booking Successful</h1>

      <p>
        Payment completed successfully.
      </p>

      <img
        src={`http://127.0.0.1:8000/${qr}`}
        alt="QR Ticket"
        style={{
          width: "250px",
          marginTop: "20px",
        }}
      />

      <br />

      <a
        href={`http://127.0.0.1:8000/${qr}`}
        download
      >
        <button
          style={{
            marginTop: "20px",
            background: "#16a34a",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          📥 Download Ticket
        </button>
      </a>
    </div>
  );
}

export default TicketSuccess;