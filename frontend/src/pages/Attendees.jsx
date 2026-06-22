function Attendees() {
  return (
    <div
      style={{
        padding: "30px",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          marginBottom: "10px",
          color: "#0f172a",
        }}
      >
        👥 Attendees Management
      </h1>

      <p
        style={{
          color: "#64748b",
          marginBottom: "30px",
        }}
      >
        Manage all event attendees and registrations.
      </p>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h2>450</h2>
          <p>Total Attendees</p>
        </div>

        <div style={cardStyle}>
          <h2>120</h2>
          <p>Registered Today</p>
        </div>

        <div style={cardStyle}>
          <h2>25</h2>
          <p>Active Events</p>
        </div>

        <div style={cardStyle}>
          <h2>95%</h2>
          <p>Attendance Rate</p>
        </div>
      </div>

      {/* Attendees Table */}
      <div
        style={{
          marginTop: "30px",
          background: "white",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2>📋 Attendee List</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "15px",
          }}
        >
          <thead>
            <tr>
              <th style={tableHead}>Name</th>
              <th style={tableHead}>Email</th>
              <th style={tableHead}>Event</th>
              <th style={tableHead}>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={tableCell}>Nivetha</td>
              <td style={tableCell}>nivetha@gmail.com</td>
              <td style={tableCell}>Tech Conference 2026</td>
              <td style={activeCell}>Confirmed</td>
            </tr>

            <tr>
              <td style={tableCell}>Vignesh</td>
              <td style={tableCell}>vignesh@gmail.com</td>
              <td style={tableCell}>Music Festival</td>
              <td style={activeCell}>Confirmed</td>
            </tr>

            <tr>
              <td style={tableCell}>Rahul</td>
              <td style={tableCell}>rahul@gmail.com</td>
              <td style={tableCell}>Startup Summit</td>
              <td style={pendingCell}>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const tableHead = {
  textAlign: "left",
  padding: "15px",
  borderBottom: "2px solid #e2e8f0",
};

const tableCell = {
  padding: "15px",
  borderBottom: "1px solid #e2e8f0",
};

const activeCell = {
  padding: "15px",
  color: "#16a34a",
  fontWeight: "600",
};

const pendingCell = {
  padding: "15px",
  color: "#f59e0b",
  fontWeight: "600",
};

export default Attendees;