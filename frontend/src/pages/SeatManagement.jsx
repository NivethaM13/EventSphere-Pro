import { useState } from "react";

function SeatManagement() {
  const seats = [
    "A1","A2","A3","A4",
    "B1","B2","B3","B4",
    "C1","C2","C3","C4"
  ];

  const [selectedSeat, setSelectedSeat] = useState(null);

  const reservedSeats = ["A2", "B3"];

  return (
    <div
      style={{
        padding: "30px",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1>💺 Seat Management</h1>

      <p>Select your preferred seat.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,80px)",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        {seats.map((seat) => {
          const isReserved =
            reservedSeats.includes(seat);

          const isSelected =
            selectedSeat === seat;

          return (
            <button
              key={seat}
              disabled={isReserved}
              onClick={() =>
                setSelectedSeat(seat)
              }
              style={{
                height: "60px",
                border: "none",
                borderRadius: "10px",
                cursor: isReserved
                  ? "not-allowed"
                  : "pointer",
                background: isReserved
                  ? "#ef4444"
                  : isSelected
                  ? "#2563eb"
                  : "#22c55e",
                color: "white",
                fontWeight: "600",
              }}
            >
              {seat}
            </button>
          );
        })}
      </div>

      {selectedSeat && (
        <div
          style={{
            marginTop: "30px",
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            maxWidth: "400px",
          }}
        >
          <h3>
            Selected Seat: {selectedSeat}
          </h3>
        </div>
      )}
    </div>
  );
}

export default SeatManagement;