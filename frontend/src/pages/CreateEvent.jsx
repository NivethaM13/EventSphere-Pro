import { useState } from "react";
import axios from "axios";

function CreateEvent() {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    venue: "",
    event_date: "",
    category: "",
    organizer_email: "",
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const createEvent = async () => {
    try {
      await axios.post(
        "http://127.0.0.1:8000/event/create-event",
        event
      );

      alert("Event Created Successfully");

      setEvent({
        title: "",
        description: "",
        venue: "",
        event_date: "",
        category: "",
        organizer_email: "",
      });
    } catch (error) {
      alert("Error creating event");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Create Event</h1>

      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={event.title}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={event.description}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="venue"
        placeholder="Venue"
        value={event.venue}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="date"
        name="event_date"
        value={event.event_date}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={event.category}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="email"
        name="organizer_email"
        placeholder="Organizer Email"
        value={event.organizer_email}
        onChange={handleChange}
        style={inputStyle}
      />

      <button
        onClick={createEvent}
        style={buttonStyle}
      >
        Create Event
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
};

const buttonStyle = {
  padding: "12px 20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default CreateEvent;