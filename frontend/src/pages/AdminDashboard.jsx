import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          background: "white",
          padding: "20px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#111827",
          }}
        >
          👑 Admin Dashboard
        </h1>

        <button
          onClick={logout}
          style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Logout
        </button>
      </div>

      {/* Dashboard Content */}
      <div style={{ padding: "30px" }}>
        {/* Welcome Banner */}
        <div
          style={{
            marginBottom: "25px",
            padding: "25px",
            borderRadius: "16px",
            background:
              "linear-gradient(135deg,#2563eb,#7c3aed)",
            color: "white",
          }}
        >
          <h2>Welcome Back Admin 👋</h2>

          <p>
            Manage users, organizers, events and
            platform analytics from one place.
          </p>
        </div>

        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h2>8</h2>
            <p>Total Events</p>
          </div>

          <div style={cardStyle}>
            <h2>1</h2>
            <p>Total Organizers</p>
          </div>

          <div style={cardStyle}>
            <h2>2</h2>
            <p>Total Admins</p>
          </div>

          <div style={cardStyle}>
            <h2>₹50,000</h2>
            <p>Total Revenue</p>
          </div>
        </div>

        {/* Admin Actions */}
        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          <button
  style={btnStyle}
  onClick={() => navigate("/manage-users")}
>
  👥 Manage Users
</button>

          <button
  style={btnStyle}
  onClick={() => navigate("/manage-organizers")}
>
  🎤 Manage Organizers
</button>

          <button
            style={btnStyle}
            onClick={() => navigate("/manage-events")}
          >
            🎉 Manage Events
          </button>

          <button
  style={btnStyle}
  onClick={() => navigate("/manage-categories")}
>
  📂 Manage Categories
</button>


        <button
  style={btnStyle}
  onClick={() => navigate("/analytics")}
>
  📈 Analytics
</button>


        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const btnStyle = {
  padding: "18px",
  border: "none",
  borderRadius: "12px",
  background: "#2563eb",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
};

export default AdminDashboard;