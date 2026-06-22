import { useState } from "react";

function CheckIn() {
  const [ticketId, setTicketId] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState([]);

  const verifyTicket = () => {
    if (ticketId.trim() === "") {
      setMessage("Enter Ticket ID");
      return;
    }

    const attendee = {
      ticket: ticketId,
      status: "Checked In",
    };

    setAttendance([...attendance, attendee]);

    setMessage(`✅ Ticket ${ticketId} Verified Successfully`);

    setTicketId("");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🎫 Event Check-In System</h1>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          maxWidth: "600px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Ticket ID"
          value={ticketId}
          onChange={(e) => setTicketId(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            marginBottom: "15px",
          }}
        />

        <button
          onClick={verifyTicket}
          style={{
            background: "#16a34a",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Verify Entry
        </button>

        {message && (
          <p
            style={{
              marginTop: "15px",
              color: "#16a34a",
              fontWeight: "600",
            }}
          >
            {message}
          </p>
        )}
      </div>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2>📋 Attendance Tracking</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "15px",
          }}
        >
          <thead>
            <tr>
              <th style={tableHead}>Ticket ID</th>
              <th style={tableHead}>Status</th>
            </tr>
          </thead>

          <tbody>
            {attendance.map((item, index) => (
              <tr key={index}>
                <td style={tableCell}>{item.ticket}</td>
                <td style={successCell}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const tableHead = {
  textAlign: "left",
  padding: "12px",
  borderBottom: "2px solid #e5e7eb",
};

const tableCell = {
  padding: "12px",
  borderBottom: "1px solid #e5e7eb",
};

const successCell = {
  padding: "12px",
  color: "green",
  fontWeight: "600",
};

export default CheckIn;