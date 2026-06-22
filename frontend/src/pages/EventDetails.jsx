import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    try {
      console.log("Fetching Event:", id);

      const response = await API.get(`/event/event/${id}`);

      console.log("Response:", response.data);

      setEvent(response.data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Loading Event...</h2>
      </div>
    );
  }

  if (!event) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Event Not Found</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "30px",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "white",
          maxWidth: "800px",
          margin: "auto",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            color: "#2563eb",
            marginBottom: "20px",
          }}
        >
          🎉 {event.title}
        </h1>

        <p style={{ fontSize: "18px", color: "#475569" }}>
          {event.description}
        </p>

        <hr />

        <p>
          <strong>📍 Venue:</strong> {event.venue}
        </p>

        <p>
          <strong>📅 Event Date:</strong> {event.event_date}
        </p>

        <p>
          <strong>🏷 Category:</strong> {event.category}
        </p>

        <p>
          <strong>📧 Organizer:</strong> {event.organizer_email}
        </p>

        <p>
          <strong>📌 Status:</strong> {event.status}
        </p>

        <button
  onClick={() => navigate(`/book-ticket/${event.id}`)}
  style={{
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "20px",
    fontWeight: "600",
  }}
>
  🎟 Book Ticket
</button>


      </div>
    </div>
  );
}

export default EventDetails;