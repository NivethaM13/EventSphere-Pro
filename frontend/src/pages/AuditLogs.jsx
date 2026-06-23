import { useEffect, useState } from "react";
import API from "../services/api";

function AuditLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await API.get("/audit-logs/");
      setLogs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📜 Audit Logs</h1>

      <table
        style={{
          width: "100%",
          background: "white",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={tableHead}>ID</th>
            <th style={tableHead}>Action</th>
            <th style={tableHead}>User Email</th>
            <th style={tableHead}>Status</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td style={tableCell}>{log.id}</td>
              <td style={tableCell}>{log.action}</td>
              <td style={tableCell}>{log.user_email}</td>
              <td style={tableCell}>{log.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableHead = {
  border: "1px solid #ddd",
  padding: "12px",
};

const tableCell = {
  border: "1px solid #ddd",
  padding: "12px",
};

export default AuditLogs;