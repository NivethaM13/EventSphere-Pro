import { useEffect, useState } from "react";
import API from "../services/api";

function Sponsors() {
  const [sponsors, setSponsors] = useState([]);

  const [formData, setFormData] = useState({
    sponsor_name: "",
    company_name: "",
    package_type: "",
    contact_email: "",
  });

  useEffect(() => {
    fetchSponsors();
  }, []);

  const fetchSponsors = async () => {
    try {
      const response = await API.get("/sponsors/");
      setSponsors(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addSponsor = async () => {
    try {
      await API.post("/sponsors/add", formData);

      alert("Sponsor Added Successfully");

      setFormData({
        sponsor_name: "",
        company_name: "",
        package_type: "",
        contact_email: "",
      });

      fetchSponsors();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🤝 Sponsorship Management</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Sponsor Name"
          value={formData.sponsor_name}
          onChange={(e) =>
            setFormData({
              ...formData,
              sponsor_name: e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Company Name"
          value={formData.company_name}
          onChange={(e) =>
            setFormData({
              ...formData,
              company_name: e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Package Type"
          value={formData.package_type}
          onChange={(e) =>
            setFormData({
              ...formData,
              package_type: e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Contact Email"
          value={formData.contact_email}
          onChange={(e) =>
            setFormData({
              ...formData,
              contact_email: e.target.value,
            })
          }
          style={inputStyle}
        />

        <button onClick={addSponsor} style={btnStyle}>
          Add Sponsor
        </button>
      </div>

      {sponsors.map((sponsor) => (
        <div
          key={sponsor.id}
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "15px",
          }}
        >
          <h3>{sponsor.sponsor_name}</h3>

          <p>🏢 {sponsor.company_name}</p>
          <p>📦 {sponsor.package_type}</p>
          <p>📧 {sponsor.contact_email}</p>
          <p>✅ {sponsor.status}</p>
        </div>
      ))}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
};

const btnStyle = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Sponsors;