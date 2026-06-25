import { useEffect, useState } from "react";
import API from "../services/api";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await API.get("/auth/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>👥 Manage Users</h1>

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
            <th style={th}>Role</th>
            <th style={th}>Verification</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td style={td}>{user.id}</td>
                <td style={td}>{user.full_name}</td>
                <td style={td}>{user.email}</td>
                <td style={td}>{user.role}</td>
                <td style={td}>{user.is_verified}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                No users found.
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

export default ManageUsers;