function Payments() {
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
        💳 Payments Dashboard
      </h1>

      <p
        style={{
          color: "#64748b",
          marginBottom: "30px",
        }}
      >
        Monitor payment transactions and revenue.
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
          <h2>₹50,000</h2>
          <p>Total Revenue</p>
        </div>

        <div style={cardStyle}>
          <h2>120</h2>
          <p>Successful Payments</p>
        </div>

        <div style={cardStyle}>
          <h2>5</h2>
          <p>Pending Payments</p>
        </div>

        <div style={cardStyle}>
          <h2>₹500</h2>
          <p>Average Ticket Price</p>
        </div>
      </div>

      {/* Payment History */}
      <div
        style={{
          marginTop: "30px",
          background: "white",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2>💰 Payment History</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "15px",
          }}
        >
          <thead>
            <tr>
              <th style={tableHead}>Payment ID</th>
              <th style={tableHead}>Customer</th>
              <th style={tableHead}>Amount</th>
              <th style={tableHead}>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={tableCell}>PAY001</td>
              <td style={tableCell}>nivetha@gmail.com</td>
              <td style={tableCell}>₹500</td>
              <td style={successCell}>Success</td>
            </tr>

            <tr>
              <td style={tableCell}>PAY002</td>
              <td style={tableCell}>organizer@gmail.com</td>
              <td style={tableCell}>₹500</td>
              <td style={successCell}>Success</td>
            </tr>

            <tr>
              <td style={tableCell}>PAY003</td>
              <td style={tableCell}>demo@gmail.com</td>
              <td style={tableCell}>₹500</td>
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

const successCell = {
  padding: "15px",
  color: "#16a34a",
  fontWeight: "600",
};

const pendingCell = {
  padding: "15px",
  color: "#f59e0b",
  fontWeight: "600",
};

export default Payments;