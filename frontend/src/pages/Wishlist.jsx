import { useEffect, useState } from "react";
import API from "../services/api";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const response = await API.get(
        "/wishlist/all"
      );

      setWishlist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeWishlist = async (id) => {
    try {
      await API.delete(
        `/wishlist/delete/${id}`
      );

      fetchWishlist();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1>❤️ My Wishlist</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(320px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {wishlist.map((item) => (
          <div
            key={item.id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3>{item.event_title}</h3>

            <p>
              👤 {item.user_email}
            </p>

            <button
              onClick={() =>
                removeWishlist(item.id)
              }
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;