import { useEffect, useState } from "react";
import axios from "axios";

function EventDiscovery() {
  const [events, setEvents] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const allEvents = await axios.get(
      "http://127.0.0.1:8000/event/events"
    );

    const featuredEvents = await axios.get(
      "http://127.0.0.1:8000/event/featured-events"
    );

    const trendingEvents = await axios.get(
      "http://127.0.0.1:8000/event/trending-events"
    );

    setEvents(allEvents.data);
    setFeatured(featuredEvents.data);
    setTrending(trendingEvents.data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Event Discovery</h1>

      <h2>Featured Events</h2>

      {featured.map((event) => (
        <div key={event.id} style={cardStyle}>
          {event.title}
        </div>
      ))}

      <h2 style={{ marginTop: "30px" }}>
        Trending Events
      </h2>

      {trending.map((event) => (
        <div key={event.id} style={cardStyle}>
          {event.title}
        </div>
      ))}

      <h2 style={{ marginTop: "30px" }}>
        Browse Events
      </h2>

      {events.map((event) => (
        <div key={event.id} style={cardStyle}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{event.venue}</p>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  background: "#ffffff",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "15px",
  border: "1px solid #e5e7eb",
};

export default EventDiscovery;