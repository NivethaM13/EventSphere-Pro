import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "300px",
        minHeight: "100vh",
        background: "linear-gradient(180deg,#0f172a,#020617)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        boxSizing: "border-box",
        borderRight: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Logo */}
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: "800",
          }}
        >
          🎉 EventSphere
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "10px",
            fontSize: "14px",
          }}
        >
          Professional Event Management Platform
        </p>
      </div>

      {/* Navigation */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <Link to="/dashboard" style={linkStyle}>
          <div style={activeMenu}>📊 Dashboard</div>
        </Link>


        <Link to="/events" style={linkStyle}>
          <div style={menuItem}>📅 Events</div>
        </Link>

        <Link to="/event-search" style={linkStyle}>
          <div style={menuItem}>🔍 Event Search</div>
        </Link>

        <Link to="/event-discovery" style={linkStyle}>
          <div style={menuItem}>🌟 Event Discovery</div>
        </Link>

        

        <Link to="/categories" style={linkStyle}>
          <div style={menuItem}>📂 Categories</div>
        </Link>

        <Link to="/event-media" style={linkStyle}>
          <div style={menuItem}>🖼 Event Media</div>
        </Link>

        <Link to="/ticket-management" style={linkStyle}>
          <div style={menuItem}>🎟 Ticket Management</div>
        </Link>

        
       <Link to="/check-in" style={linkStyle}>
  <div style={menuItem}>🎫 Event Check-In</div>
</Link>

<Link to="/seat-management" style={linkStyle}>
  <div style={menuItem}>💺 Seat Management</div>
</Link>

        <Link to="/my-bookings" style={linkStyle}>
          <div style={menuItem}>📄 My Bookings</div>
        </Link>

        <Link to="/attendees" style={linkStyle}>
          <div style={menuItem}>👥 Attendees</div>
        </Link>

        <Link to="/analytics" style={linkStyle}>
          <div style={menuItem}>📈 Analytics</div>
        </Link>

        <Link to="/organizers" style={linkStyle}>
          <div style={menuItem}>🏢 Organizers</div>
        </Link>

        <Link to="/payments" style={linkStyle}>
          <div style={menuItem}>💳 Payments</div>
        </Link>

        <Link to="/settings" style={linkStyle}>
          <div style={menuItem}>⚙ Settings</div>
        </Link>

        <Link to="/wishlist" style={linkStyle}>
  <div style={menuItem}>❤️ Wishlist</div>
</Link>


      </div>

      {/* Quick Actions */}
      <div style={{ marginTop: "40px" }}>
        <h4
          style={{
            color: "#94a3b8",
            marginBottom: "15px",
            fontSize: "14px",
          }}
        >
          QUICK ACTIONS
        </h4>

        <Link to="/create-event" style={linkStyle}>
          <button style={actionBtn}>
            ➕ Create Event
          </button>
        </Link>

        <button style={secondaryBtn}>
          👤 Add Organizer
        </button>
      </div>

      {/* Dashboard Summary */}
      <div
        style={{
          marginTop: "35px",
          background: "#1e293b",
          borderRadius: "16px",
          padding: "20px",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#94a3b8",
            fontSize: "13px",
          }}
        >
          Active Events
        </p>

        <h2
          style={{
            margin: "8px 0",
            fontSize: "32px",
          }}
        >
          25
        </h2>

        <p
          style={{
            margin: 0,
            color: "#22c55e",
            fontSize: "14px",
          }}
        >
          ↑ 12% this month
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            borderRadius: "14px",
            padding: "16px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontWeight: "700",
              fontSize: "15px",
            }}
          >
            EventSphere Pro
          </p>

          <p
            style={{
              margin: "6px 0 0",
              color: "#94a3b8",
              fontSize: "12px",
            }}
          >
            Version 1.0.0
          </p>
        </div>
      </div>
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const activeMenu = {
  padding: "16px 18px",
  borderRadius: "14px",
  background: "#2563eb",
  fontWeight: "600",
  cursor: "pointer",
};

const menuItem = {
  padding: "16px 18px",
  borderRadius: "14px",
  background: "#1e293b",
  fontWeight: "500",
  cursor: "pointer",
};

const actionBtn = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  border: "none",
  borderRadius: "12px",
  background: "#2563eb",
  color: "white",
  fontWeight: "600",
  cursor: "pointer",
};

const secondaryBtn = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "12px",
  background: "#334155",
  color: "white",
  fontWeight: "600",
  cursor: "pointer",
};

export default Sidebar;