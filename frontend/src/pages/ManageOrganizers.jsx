import { useEffect, useState } from "react";
import API from "../services/api";

function ManageOrganizers() {
  const [organizers, setOrganizers] = useState([]);

  useEffect(() => {
    fetchOrganizers();
  }, []);

  const fetchOrganizers = async () => {
    try {
      // Your backend route is /auth/organizers
      const response = await API.get("/auth/organizers");
      setOrganizers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🎤 Manage Organizers</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          background: "white",
        }}
      >
        <thead>
          <tr>
            <th style={th}>ID</th>
            <th style={th}>Full Name</th>
            <th style={th}>Email</th>
            <th style={th}>Verification</th>
          </tr>
        </thead>

        <tbody>
          {organizers.length > 0 ? (
            organizers.map((organizer) => (
              <tr key={organizer.id}>
                <td style={td}>{organizer.id}</td>
                <td style={td}>{organizer.full_name}</td>
                <td style={td}>{organizer.email}</td>
                <td style={td}>{organizer.is_verified}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                No organizers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  border: "1px solid #ddd",
  padding: "12px",
  background: "#2563eb",
  color: "white",
};

const td = {
  border: "1px solid #ddd",
  padding: "12px",
};

export default ManageOrganizers;