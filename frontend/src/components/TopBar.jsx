import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <button
        onClick={() => navigate("/dashboard")}
        style={{ marginLeft: "10px" }}
      >
        🏠 Home
      </button>
    </div>
  );
}

export default TopBar;