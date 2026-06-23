import { useEffect, useState } from "react";
import axios from "axios";

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const res = await axios.get(
      "http://127.0.0.1:8000/message/all"
    );

    setMessages(res.data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📩 Messages</h1>

      {messages.map((msg) => (
        <div
          key={msg.id}
          style={{
            background: "#fff",
            padding: "15px",
            marginTop: "12px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        >
          <h4>From: {msg.sender_email}</h4>
          <p>To: {msg.receiver_email}</p>
          <p>{msg.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Messages;