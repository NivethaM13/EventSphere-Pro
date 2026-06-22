import { useEffect, useState } from "react";
import API from "../services/api";

function OrganizerDashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await API.get("/event/events");
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🎤 Organizer Dashboard</h1>

      <button
        onClick={() => window.location.href="/create-event"}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "600",
          marginTop: "15px",
        }}
      >
        ➕ Create Event
      </button>


      <div
  style={{
    display: "flex",
    gap: "15px",
    marginTop: "15px",
    marginBottom: "25px",
  }}
>
  <button
    onClick={() => window.location.href="/ticket-management"}
    style={actionBtn}
  >
    🎟 Ticket Management
  </button>

  <button
    onClick={() => window.location.href="/my-bookings"}
    style={actionBtn}
  >
    📄 View Bookings
  </button>

  <button
    onClick={() => window.location.href="/event-media"}
    style={actionBtn}
  >
    📸 Event Media
  </button>

<button
  onClick={() => window.location.href="/check-in"}
  style={{
    background:"#16a34a",
    color:"white",
    border:"none",
    padding:"12px 20px",
    borderRadius:"10px",
    cursor:"pointer"
  }}
>
  🎫 Event Check-In
</button>




</div>



      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={cardStyle}>
          <h2>{events.length}</h2>
          <p>Total Events</p>
        </div>

        <div style={cardStyle}>
          <h2>120</h2>
          <p>Tickets Sold</p>
        </div>

        <div style={cardStyle}>
          <h2>₹50,000</h2>
          <p>Revenue</p>
        </div>

        <div style={cardStyle}>
          <h2>450</h2>
          <p>Attendees</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h2>📅 My Events</h2>

        {events.map((event) => (
          <div
            key={event.id}
            style={{
              padding: "15px",
              borderBottom: "1px solid #eee",
            }}
          >
            <h3>{event.title}</h3>

            <p>📍 {event.venue}</p>

            <p>📅 {event.event_date}</p>

            <p>🏷 {event.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  textAlign: "center",
};

export default OrganizerDashboard;

const actionBtn = {
  background: "#0f172a",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
};