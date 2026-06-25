import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue (₹)",
        data: [10000, 15000, 18000, 25000, 40000, 50000],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Revenue",
      },
    },
  };

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
        📈 Analytics Dashboard
      </h1>

      <p
        style={{
          color: "#64748b",
          marginBottom: "30px",
        }}
      >
        Monitor event performance and revenue insights.
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
          <h2>25</h2>
          <p>Total Events</p>
        </div>

        <div style={cardStyle}>
          <h2>450</h2>
          <p>Attendees</p>
        </div>

        <div style={cardStyle}>
          <h2>120</h2>
          <p>Tickets Sold</p>
        </div>

        <div style={cardStyle}>
          <h2>₹50,000</h2>
          <p>Revenue</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div
        style={{
          marginTop: "30px",
          background: "white",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2>💰 Revenue Analytics</h2>

        <Line
          data={chartData}
          options={chartOptions}
        />
      </div>

      {/* Top Events */}
      <div
        style={{
          marginTop: "30px",
          background: "white",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2>🔥 Top Performing Events</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "15px",
          }}
        >
          <thead>
            <tr>
              <th style={tableHead}>Event</th>
              <th style={tableHead}>Tickets Sold</th>
              <th style={tableHead}>Revenue</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={tableCell}>Tech Conference 2026</td>
              <td style={tableCell}>50</td>
              <td style={tableCell}>₹25,000</td>
            </tr>

            <tr>
              <td style={tableCell}>Music Festival</td>
              <td style={tableCell}>40</td>
              <td style={tableCell}>₹15,000</td>
            </tr>

            <tr>
              <td style={tableCell}>Startup Summit</td>
              <td style={tableCell}>30</td>
              <td style={tableCell}>₹10,000</td>
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

export default Analytics;