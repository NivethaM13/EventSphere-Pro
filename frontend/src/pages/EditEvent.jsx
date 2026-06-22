import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [venue, setVenue] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const response = await API.get(
        `/event/event/${id}`
      );

      setTitle(response.data.title);
      setDescription(response.data.description);
      setVenue(response.data.venue);
      setCategory(response.data.category);
    } catch (error) {
      console.log(error);
    }
  };

  const updateEvent = async () => {
    try {
      await API.put(
        `/event/update-event/${id}`,
        {
          title,
          description,
          venue,
          category,
        }
      );

      alert("Event Updated Successfully");

      navigate("/manage-events");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1>✏️ Edit Event</h1>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          maxWidth: "700px",
        }}
      >
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={inputStyle}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          style={{
            ...inputStyle,
            height: "120px",
          }}
        />

        <input
          type="text"
          placeholder="Venue"
          value={venue}
          onChange={(e) =>
            setVenue(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={updateEvent}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Update Event
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

export default EditEvent;