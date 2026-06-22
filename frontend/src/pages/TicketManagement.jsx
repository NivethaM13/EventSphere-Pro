import { useEffect, useState } from "react";
import API from "../services/api";

function TicketManagement() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await API.get("/ticket/tickets");
      setTickets(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🎟 Ticket Management</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
        }}
      >
        <thead>
          <tr>
            <th style={tableHead}>ID</th>
            <th style={tableHead}>Event ID</th>
            <th style={tableHead}>Type</th>
            <th style={tableHead}>Price</th>
            <th style={tableHead}>Quantity</th>
            <th style={tableHead}>Available</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td style={tableCell}>{ticket.id}</td>
              <td style={tableCell}>{ticket.event_id}</td>
              <td style={tableCell}>{ticket.ticket_type}</td>
              <td style={tableCell}>₹{ticket.price}</td>
              <td style={tableCell}>{ticket.quantity}</td>
              <td style={tableCell}>{ticket.available_tickets}</td>
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

export default TicketManagement;