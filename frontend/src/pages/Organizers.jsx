function Organizers() {
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
        🏢 Organizer Management
      </h1>

      <p
        style={{
          color: "#64748b",
          marginBottom: "30px",
        }}
      >
        Manage event organizers and their activities.
      </p>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h2>15</h2>
          <p>Total Organizers</p>
        </div>

        <div style={cardStyle}>
          <h2>25</h2>
          <p>Events Managed</p>
        </div>

        <div style={cardStyle}>
          <h2>450</h2>
          <p>Total Attendees</p>
        </div>

        <div style={cardStyle}>
          <h2>₹50,000</h2>
          <p>Total Revenue</p>
        </div>
      </div>

      {/* Organizer Table */}
      <div
        style={{
          marginTop: "30px",
          background: "white",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2>👤 Organizer List</h2>

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
              <th style={tableHead}>Events</th>
              <th style={tableHead}>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={tableCell}>Nivetha</td>
              <td style={tableCell}>nivetha@gmail.com</td>
              <td style={tableCell}>8</td>
              <td style={activeCell}>Active</td>
            </tr>

            <tr>
              <td style={tableCell}>Organizer Team</td>
              <td style={tableCell}>organizer@gmail.com</td>
              <td style={tableCell}>12</td>
              <td style={activeCell}>Active</td>
            </tr>

            <tr>
              <td style={tableCell}>Demo User</td>
              <td style={tableCell}>demo@gmail.com</td>
              <td style={tableCell}>5</td>
              <td style={inactiveCell}>Inactive</td>
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

const inactiveCell = {
  padding: "15px",
  color: "#ef4444",
  fontWeight: "600",
};

export default Organizers;