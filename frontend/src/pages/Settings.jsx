function Settings() {
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
        ⚙ Settings
      </h1>

      <p
        style={{
          color: "#64748b",
          marginBottom: "30px",
        }}
      >
        Manage your EventSphere account and platform settings.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h2>👤 Profile Settings</h2>
          <p>Update your name, email and account details.</p>

          <button style={btnStyle}>
            Edit Profile
          </button>
        </div>

        <div style={cardStyle}>
          <h2>🔒 Security</h2>
          <p>Change password and manage account security.</p>

          <button style={btnStyle}>
            Change Password
          </button>
        </div>

        <div style={cardStyle}>
          <h2>🔔 Notifications</h2>
          <p>Manage event and booking notifications.</p>

          <button style={btnStyle}>
            Notification Settings
          </button>
        </div>

        <div style={cardStyle}>
          <h2>🚪 Logout</h2>
          <p>Sign out from the EventSphere platform.</p>

          <button
            style={{
              ...btnStyle,
              background: "#ef4444",
            }}
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const btnStyle = {
  marginTop: "15px",
  padding: "12px 18px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
};

export default Settings;