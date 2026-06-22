import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function ManageEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);
const navigate = useNavigate();
  const fetchEvents = async () => {
    try {
      const response = await API.get("/event/events");
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteEvent = async (id) => {
  try {
    await API.delete(
      `/event/delete-event/${id}`
    );

    alert("Event Deleted Successfully");

    fetchEvents();
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
      <h1>🎉 Manage Events</h1>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
          background: "white",
        }}
      >
        <thead>
          <tr>
            <th style={tableHead}>ID</th>
            <th style={tableHead}>Title</th>
            <th style={tableHead}>Category</th>
            <th style={tableHead}>Venue</th>
            <th style={tableHead}>Date</th>
            <th style={tableHead}>Status</th>
            <th style={tableHead}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td style={tableCell}>{event.id}</td>
              <td style={tableCell}>{event.title}</td>
              <td style={tableCell}>{event.category}</td>
              <td style={tableCell}>{event.venue}</td>
              <td style={tableCell}>{event.event_date}</td>
              <td style={tableCell}>{event.status}</td>

              <td style={tableCell}>
                

                <button
  style={editBtn}
  onClick={() => navigate(`/edit-event/${event.id}`)}
>
  Edit
</button>

                <button
  style={deleteBtn}
  onClick={() => deleteEvent(event.id)}
>
  Delete
</button>


              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableHead = {
  padding: "12px",
  background: "#2563eb",
  color: "white",
  border: "1px solid #ddd",
};

const tableCell = {
  padding: "12px",
  border: "1px solid #ddd",
};

const editBtn = {
  background: "#22c55e",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px",
};

const deleteBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default ManageEvents;