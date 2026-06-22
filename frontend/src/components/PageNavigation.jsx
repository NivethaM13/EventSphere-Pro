import { useNavigate } from "react-router-dom";

function PageNavigation() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={btnStyle}
      >
        ⬅ Back
      </button>

      <button
        onClick={() => navigate("/dashboard")}
        style={btnStyle}
      >
        🏠 Home
      </button>
    </div>
  );
}

const btnStyle = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
};

export default PageNavigation;