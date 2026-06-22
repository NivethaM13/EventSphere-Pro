import { useEffect, useState } from "react";
import API from "../services/api";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await API.get("/booking/bookings");
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📄 My Bookings</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
        }}
      >
        <thead>
          <tr>
            <th style={tableHead}>Booking ID</th>
            <th style={tableHead}>User</th>
            <th style={tableHead}>Event ID</th>
            <th style={tableHead}>Ticket ID</th>
            <th style={tableHead}>Quantity</th>
            <th style={tableHead}>Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td style={tableCell}>{booking.id}</td>
              <td style={tableCell}>{booking.user_email}</td>
              <td style={tableCell}>{booking.event_id}</td>
              <td style={tableCell}>{booking.ticket_id}</td>
              <td style={tableCell}>{booking.quantity}</td>
              <td style={tableCell}>{booking.booking_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableHead = {
  border: "1px solid #ddd",
  padding: "12px",
};

const tableCell = {
  border: "1px solid #ddd",
  padding: "12px",
};

export default MyBookings;