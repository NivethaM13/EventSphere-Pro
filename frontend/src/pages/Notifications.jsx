import { useEffect, useState } from "react";
import axios from "axios";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    const res = await axios.get(
      "http://127.0.0.1:8000/notification/all"
    );

    setNotifications(res.data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🔔 Notifications</h1>

      {notifications.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#fff",
            padding: "15px",
            marginTop: "10px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        >
          <h4>{item.message}</h4>
          <p>Status: {item.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Notifications;