
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      localStorage.setItem(
        "role",
        response.data.role
      );

      alert("Login Successful!");


      
 if (response.data.role === "Admin") {
  navigate("/admin");
}
else if (response.data.role === "Organizer") {
  navigate("/organizer");
}
else {
  navigate("/dashboard");
}



    } catch (error) {
      console.log(error.response?.data);
      alert("Invalid Email or Password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #2563eb 100%)",
      }}
    >
      <div
        style={{
          flex: 1,
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "60px", marginBottom: "20px" }}>
          🎉
        </div>

        <h1
          style={{
            fontSize: "42px",
            fontWeight: "700",
            color: "white",
          }}
        >
          EventSphere Pro
        </h1>

        <h2
          style={{
            fontSize: "24px",
            color: "#cbd5e1",
          }}
        >
          Smart Event Management Platform
        </h2>
      </div>

      <div
        style={{
          width: "550px",
          background: "#f8fafc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#111827",
            }}
          >
            Welcome Back
          </h2>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />

          <button
            onClick={handleLogin}
            style={buttonStyle}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  border: "1px solid #dbe2ea",
  borderRadius: "12px",
  background: "#f8fafc",
  color: "#111827",
  fontSize: "15px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "linear-gradient(135deg,#2563eb,#7c3aed)",
  color: "white",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
};

export default Login;

