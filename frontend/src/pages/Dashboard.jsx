import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const revenueData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

  datasets: [
    {
      label: "Revenue",

      data: [8000, 12000, 18000, 25000, 36000, 50000],

      borderColor: "#2563eb",

      backgroundColor: "rgba(37,99,235,0.15)",

      fill: true,

      tension: 0.4,

      pointRadius: 5,

      pointBackgroundColor: "#2563eb",
    },
  ],
};

const revenueOptions = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f1f5f9",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        {/* Navbar */}
        <div
          style={{
            background: "#ffffff",
            padding: "20px 35px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                color: "#111827",
                fontSize: "28px",
              }}
            >
              Dashboard
            </h2>

            <p
              style={{
                margin: "5px 0 0 0",
                color: "#64748b",
              }}
            >
              Welcome back to EventSphere Pro
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <span
              style={{
                fontWeight: "600",
                color: "#111827",
              }}
            >
              {role}
            </span>

            <button
              onClick={logout}
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "10px 18px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
           padding: "18px 20px",
          }}
        >
          {/* Welcome Banner */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#2563eb,#7c3aed)",
              color: "white",
            padding: "16px 22px",
              borderRadius: "18px",
              marginBottom: "25px",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "26px",
                fontWeight: "700",
              }}
            >
              Welcome Back 👋
            </h1>

            <p
              style={{
                marginTop: "10px",
                fontSize: "16px",
                opacity: 0.95,
              }}
            >
              Manage events, attendees, tickets and analytics
              from one professional dashboard.
            </p>

            <p
              style={{
                marginTop: "8px",
                fontSize: "14px",
                opacity: 0.85,
              }}
            >
              Today: 12 New Registrations • 5 Active Events • ₹8,500 Revenue
            </p>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(4,minmax(180px,1fr))",
              gap: "20px",
            }}
          >
            <div style={cardStyle}>
              <div style={iconStyle}>📅</div>
              <h2 style={numberStyle}>25</h2>
              <p style={labelStyle}>Total Events</p>
            </div>

            <div style={cardStyle}>
              <div style={iconStyle}>👥</div>
              <h2 style={numberStyle}>450</h2>
              <p style={labelStyle}>Attendees</p>
            </div>

            <div style={cardStyle}>
              <div style={iconStyle}>🎟️</div>
              <h2 style={numberStyle}>120</h2>
              <p style={labelStyle}>Tickets Sold</p>
            </div>

            <div style={cardStyle}>
              <div style={iconStyle}>💰</div>
              <h2 style={numberStyle}>₹50,000</h2>
              <p style={labelStyle}>Revenue</p>
            </div>
          </div>

          {/* Analytics + Events */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "20px",
              marginTop: "25px",
            }}
          >
            <div style={sectionStyle}>
              <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  }}
>
  <h2 style={{ margin: 0 }}>
    📈 Revenue Analytics
  </h2>

  <span
    style={{
      background: "#dcfce7",
      color: "#15803d",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "13px",
      fontWeight: "600",
    }}
  >
    +18%
  </span>
</div>
   
<>
  <div
    style={{
      height: "220px",
      padding: "10px",
    }}
  >
    <Line
      data={revenueData}
      options={revenueOptions}
    />
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "15px",
      marginTop: "20px",
    }}
  >
    <div style={summaryCard}>
      <h3
        style={{
          margin: 0,
          color: "#2563eb",
          fontSize: "20px",
        }}
      >
        ₹50,000
      </h3>

      <p>Total Revenue</p>
    </div>

    <div style={summaryCard}>
      <h3
        style={{
          margin: 0,
          color: "#16a34a",
          fontSize: "24px",
        }}
      >
        120
      </h3>

      <p>Bookings</p>
    </div>

    <div style={summaryCard}>
      <h3
        style={{
          margin: 0,
          color: "#ea580c",
          fontSize: "24px",
        }}
      >
        ₹420
      </h3>

      <p>Average Ticket</p>
    </div>

    <div style={summaryCard}>
      <h3
        style={{
          margin: 0,
          color: "#7c3aed",
          fontSize: "20px",
        }}
      >
        +18%
      </h3>

      <p>Growth</p>
    </div>
  </div>
</>

            </div>

            <div style={sectionStyle}>
              <h2 style={sectionTitle}>
                Upcoming Events
              </h2>

              <div style={eventItem}>
  <strong>Tech Conference 2026</strong>
  <br />
  <span style={{ color: "#64748b", fontSize: "13px" }}>
    28 June • Chennai
  </span>
</div>
<div style={eventItem}>
  <strong>Music Festival</strong>
  <br />
  <span style={{ color: "#64748b", fontSize: "12px" }}>
    30 June • Bengaluru
  </span>
</div>

<div style={eventItem}>
  <strong>Startup Summit</strong>
  <br />
  <span style={{ color: "#64748b", fontSize: "12px" }}>
    2 July • Hyderabad
  </span>
</div>

<div style={eventItem}>
  <strong>Career Expo</strong>
  <br />
  <span style={{ color: "#64748b", fontSize: "12px" }}>
    5 July • Chennai
  </span>
</div>


              <div
  onClick={() => navigate("/book-ticket/1")}
  style={{
    padding: "10px",
    background: "#dbeafe",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
  }}
>
  🎟 Book Tickets
</div>
            </div>
          </div>

          {/* Recent Activity */}
          <div
            style={{
              ...sectionStyle,
              marginTop: "25px",
            }}
          >
            <h2 style={sectionTitle}>
              Recent Activity
            </h2>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr>
                  <th style={tableHead}>Activity</th>
                  <th style={tableHead}>Status</th>
                  <th style={tableHead}>Date</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={tableCell}>New Event Created</td>
                  <td style={tableCell}>Success</td>
                  <td style={tableCell}>Today</td>
                </tr>

                <tr>
                  <td style={tableCell}>25 Tickets Sold</td>
                  <td style={tableCell}>Completed</td>
                  <td style={tableCell}>Today</td>
                </tr>

                <tr>
                  <td style={tableCell}>New Organizer Registered</td>
                  <td style={tableCell}>Success</td>
                  <td style={tableCell}>Today</td>
                </tr>

                <tr>
                  <td style={tableCell}>Revenue Updated</td>
                  <td style={tableCell}>Completed</td>
                  <td style={tableCell}>Today</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#ffffff",
  borderRadius: "14px",
  padding: "12px",
  minHeight: "90px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #e5e7eb",
  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
  transition: "0.3s",
  cursor: "pointer",
};
const iconStyle = {
  fontSize: "22px",
  marginBottom: "6px",
};

const numberStyle = {
  color: "#2563eb",
  fontSize: "20px",
  fontWeight: "700",
  margin: "4px 0",
};

const labelStyle = {
  color: "#64748b",
  fontSize: "14px",
  margin: 0,
};

const sectionStyle = {
  background: "#ffffff",
  borderRadius: "18px",
  padding: "16px",
  border: "1px solid #e5e7eb",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const sectionTitle = {
  marginTop: 0,
  marginBottom: "20px",
  color: "#111827",
};

const eventItem = {
  padding: "10px",
  background: "#f8fafc",
  borderRadius: "8px",
  marginBottom: "8px",
  fontSize: "14px",
};


const tableHead = {
  textAlign: "left",
  padding: "10px",
  borderBottom: "2px solid #e5e7eb",
};

const tableCell = {
  padding: "10px",
  borderBottom: "1px solid #f1f5f9",
};

export default Dashboard;

const summaryCard = {
  background: "#f8fafc",
  borderRadius: "10px",
  padding: "12px",
  textAlign: "center",
  border: "1px solid #e5e7eb",
};