import { useEffect, useState } from "react";
import API from "../services/api";

function LiveStreams() {
  const [streams, setStreams] = useState([]);

  const [formData, setFormData] = useState({
    event_name: "",
    stream_url: "",
  });

  useEffect(() => {
    fetchStreams();
  }, []);

  const fetchStreams = async () => {
    try {
      const response = await API.get("/live-stream/");
      setStreams(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createStream = async () => {
    try {
      await API.post("/live-stream/add", formData);

      alert("Live Stream Created Successfully");

      setFormData({
        event_name: "",
        stream_url: "",
      });

      fetchStreams();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🎥 Live Event Streaming</h1>

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
          placeholder="Event Name"
          value={formData.event_name}
          onChange={(e) =>
            setFormData({
              ...formData,
              event_name: e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Streaming URL"
          value={formData.stream_url}
          onChange={(e) =>
            setFormData({
              ...formData,
              stream_url: e.target.value,
            })
          }
          style={inputStyle}
        />

        <button
          onClick={createStream}
          style={btnStyle}
        >
          Create Live Session
        </button>
      </div>

      {streams.map((stream) => (
        <div
          key={stream.id}
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "15px",
          }}
        >
          <h3>{stream.event_name}</h3>

          <p>Status: {stream.status}</p>

          <a
            href={stream.stream_url}
            target="_blank"
            rel="noreferrer"
          >
            <button style={joinBtn}>
              🎥 Join Live Stream
            </button>
          </a>
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

const joinBtn = {
  background: "#22c55e",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default LiveStreams;