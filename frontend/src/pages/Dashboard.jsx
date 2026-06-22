import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

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
            padding: "25px 30px",
          }}
        >
          {/* Welcome Banner */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#2563eb,#7c3aed)",
              color: "white",
              padding: "22px 30px",
              borderRadius: "18px",
              marginBottom: "25px",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "32px",
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
              <h2 style={sectionTitle}>
                📈 Revenue Analytics
              </h2>

              <div
                style={{
                  height: "180px",
                  background: "#eff6ff",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#2563eb",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                Revenue Chart Area
              </div>
            </div>

            <div style={sectionStyle}>
              <h2 style={sectionTitle}>
                Upcoming Events
              </h2>

              <div style={eventItem}>
                🎉 Tech Conference 2026
              </div>

              <div style={eventItem}>
                🎵 Music Fest
              </div>

              <div style={eventItem}>
                🚀 Startup Summit
              </div>

              <div style={eventItem}>
                🎓 Career Expo
              </div>

              <div
  onClick={() => navigate("/book-ticket/1")}
  style={{
    padding: "15px",
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
  borderRadius: "16px",
  padding: "15px",
  minHeight: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #e5e7eb",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const iconStyle = {
  fontSize: "22px",
  marginBottom: "6px",
};

const numberStyle = {
  color: "#2563eb",
  fontSize: "28px",
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
  padding: "20px",
  border: "1px solid #e5e7eb",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const sectionTitle = {
  marginTop: 0,
  marginBottom: "20px",
  color: "#111827",
};

const eventItem = {
  padding: "12px",
  background: "#f8fafc",
  borderRadius: "10px",
  marginBottom: "10px",
};

const tableHead = {
  textAlign: "left",
  padding: "16px",
  borderBottom: "2px solid #e5e7eb",
};

const tableCell = {
  padding: "16px",
  borderBottom: "1px solid #f1f5f9",
};

export default Dashboard;