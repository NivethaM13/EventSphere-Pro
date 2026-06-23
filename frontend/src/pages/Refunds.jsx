import { useEffect, useState } from "react";
import API from "../services/api";

function Refunds() {
  const [refunds, setRefunds] = useState([]);

  const [formData, setFormData] = useState({
    booking_id: "",
    reason: "",
  });

  useEffect(() => {
    fetchRefunds();
  }, []);

  const fetchRefunds = async () => {
    try {
      const response = await API.get("/refunds/");
      setRefunds(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const requestRefund = async () => {
    try {
      await API.post("/refunds/request", formData);

      alert("Refund Request Submitted");

      setFormData({
        booking_id: "",
        reason: "",
      });

      fetchRefunds();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>💸 Refund Management</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "20px",
        }}
      >
        <input
          type="number"
          placeholder="Booking ID"
          value={formData.booking_id}
          onChange={(e) =>
            setFormData({
              ...formData,
              booking_id: e.target.value,
            })
          }
          style={inputStyle}
        />

        <textarea
          placeholder="Refund Reason"
          value={formData.reason}
          onChange={(e) =>
            setFormData({
              ...formData,
              reason: e.target.value,
            })
          }
          style={{
            ...inputStyle,
            height: "100px",
          }}
        />

        <button
          onClick={requestRefund}
          style={btnStyle}
        >
          Request Refund
        </button>
      </div>

      <table
        style={{
          width: "100%",
          background: "white",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={tableHead}>ID</th>
            <th style={tableHead}>Booking ID</th>
            <th style={tableHead}>Reason</th>
            <th style={tableHead}>Status</th>
          </tr>
        </thead>

        <tbody>
          {refunds.map((refund) => (
            <tr key={refund.id}>
              <td style={tableCell}>{refund.id}</td>
              <td style={tableCell}>{refund.booking_id}</td>
              <td style={tableCell}>{refund.reason}</td>
              <td style={tableCell}>
                {refund.refund_status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

const tableHead = {
  border: "1px solid #ddd",
  padding: "10px",
};

const tableCell = {
  border: "1px solid #ddd",
  padding: "10px",
};

export default Refunds;