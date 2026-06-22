import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

function EventSearch() {
  const [events, setEvents] = useState([]);
  const [keyword, setKeyword] = useState("");

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
const navigate = useNavigate();
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      <TopBar />

      <h1>🔍 Event Search</h1>

      <input
        type="text"
        placeholder="Search events..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          width: "350px",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
          gap: "20px",
        }}
      >
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{event.title}</h3>

            <p>
              📍 <b>{event.venue}</b>
            </p>

            <p>📅 {event.event_date}</p>

            <p>🏷️ {event.category}</p>

            <p>{event.description}</p>

            <button
  onClick={() => navigate(`/event/${event.id}`)}
  style={{
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
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

export default EventSearch;