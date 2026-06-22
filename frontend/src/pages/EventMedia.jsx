import { useEffect, useState } from "react";
import axios from "axios";

function EventMedia() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/media/media"
      );

      setMedia(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Event Media Gallery</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {media.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <p>
              <strong>Event ID:</strong>{" "}
              {item.event_id}
            </p>

           <img
  src={`http://127.0.0.1:8000/${item.image_url}`}
  alt="Event"
  style={{
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    marginTop: "10px",
  }}
/>


          </div>
        ))}
      </div>
    </div>
  );
}

export default EventMedia;