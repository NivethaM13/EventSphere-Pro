import { useEffect, useState } from "react";
import API from "../services/api";

function Reports() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const response = await API.get("/reports/bookings");
      setReport(response.data);
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
      <h1>📊 Reports & Exports</h1>

      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <a
          href="http://127.0.0.1:8000/reports/export-csv"
          target="_blank"
          rel="noreferrer"
        >
          <button style={btnStyle}>
            📄 Export CSV
          </button>
        </a>

        <a
          href="http://127.0.0.1:8000/reports/export-pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button
            style={{
              ...btnStyle,
              marginLeft: "10px",
            }}
          >
            📑 Export PDF
          </button>
        </a>
      </div>

      {report && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3>📊 Total Bookings</h3>
            <h1>{report.total_bookings}</h1>
          </div>

          <div style={cardStyle}>
            <h3>💰 Revenue</h3>
            <h1>₹{report.total_revenue}</h1>
          </div>

          <div style={cardStyle}>
            <h3>👥 Users</h3>
            <h1>{report.total_users}</h1>
          </div>

          <div style={cardStyle}>
            <h3>🎟 Tickets</h3>
            <h1>{report.total_tickets}</h1>
          </div>
        </div>
      )}
    </div>
  );
}

const btnStyle = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
};

const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

export default Reports;