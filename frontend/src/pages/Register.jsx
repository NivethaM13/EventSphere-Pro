
import { useState } from "react";
import API from "../services/api";

function Register() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    role: "Attendee",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
const handleRegister = async () => {
  try {
    console.log("FORM DATA:", formData);

    const response = await API.post(
      "/auth/register",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("SUCCESS:", response.data);
    alert("Registration Successful!");
  } catch (error) {
    console.log("ERROR:", error.response?.data);
    alert(JSON.stringify(error.response?.data));
  }
};




  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #2563eb 100%)",
      }}
    >
      <div
        style={{
          width: "450px",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#111827",
            fontSize: "32px",
            fontWeight: "700",
          }}
        >
          Create Account
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "25px",
          }}
        >
          Register to continue
        </p>
          


          <input
  type="text"
  name="full_name"
  placeholder="Full Name"
  value={formData.full_name}
  onChange={handleChange}
  style={inputStyle}
/>



        <input
  type="email"
  name="email"
  placeholder="Email"
  value={formData.email}
  onChange={handleChange}
  style={inputStyle}
/>


<input
  type="password"
  name="password"
  placeholder="Password"
  value={formData.password}
  onChange={handleChange}
  style={inputStyle}
/>




    <select
  name="role"
  value={formData.role}
  onChange={handleChange}
  style={inputStyle}
>
  <option>Attendee</option>
  <option>Organizer</option>
  <option>Admin</option>
</select>

       
<button
  style={buttonStyle}
  onClick={handleRegister}
>
  Register
</button>

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
  fontSize: "16px",
};

export default Register;

