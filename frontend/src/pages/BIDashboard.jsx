import { useEffect, useState } from "react";
import API from "../services/api";

function BIDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await API.get("/bi-dashboard/");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      style={{
        padding: "30px",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1>📊 Business Intelligence Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>🎉 Popular Events</h3>
          <h1>{data.popular_events}</h1>
        </div>

        <div style={cardStyle}>
          <h3>🏢 Top Organizers</h3>
          <h1>{data.top_organizers}</h1>
        </div>

        <div style={cardStyle}>
          <h3>💰 Revenue Growth</h3>
          <h1>{data.revenue_growth}%</h1>
        </div>

        <div style={cardStyle}>
          <h3>📈 Booking Trends</h3>
          <h1>{data.booking_trends}</h1>
        </div>

        <div style={cardStyle}>
          <h3>👥 Platform Users</h3>
          <h1>{data.platform_users}</h1>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

export default BIDashboard;