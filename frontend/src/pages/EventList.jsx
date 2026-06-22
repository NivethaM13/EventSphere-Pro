import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function EventList() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

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
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "#f8fafc",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "10px",
        }}
      >
        🎉 All Events
      </h1>

      <p
        style={{
          color: "#64748b",
          marginBottom: "30px",
        }}
      >
        Explore all available events
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                color: "#2563eb",
                marginBottom: "15px",
              }}
            >
              {event.title}
            </h2>

            <p>
              📍 <strong>{event.venue}</strong>
            </p>

            <p>📅 {event.event_date}</p>

            <p>🏷 {event.category}</p>

            <p
              style={{
                color: "#475569",
                minHeight: "50px",
              }}
            >
              {event.description}
            </p>

            <button
              onClick={() =>
                navigate(`/event/${event.id}`)
              }
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px 18px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;