import { useEffect, useState } from "react";
import API from "../services/api";

function Coupons() {
  const [coupons, setCoupons] = useState([]);

  const [formData, setFormData] = useState({
    coupon_code: "",
    discount_percentage: "",
  });

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      const response = await API.get("/coupons/");
      setCoupons(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCoupon = async () => {
    try {
      await API.post("/coupons/add", formData);

      alert("Coupon Created Successfully");

      setFormData({
        coupon_code: "",
        discount_percentage: "",
      });

      fetchCoupons();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🎟 Coupon Management</h1>

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
          placeholder="Coupon Code"
          value={formData.coupon_code}
          onChange={(e) =>
            setFormData({
              ...formData,
              coupon_code: e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Discount %"
          value={formData.discount_percentage}
          onChange={(e) =>
            setFormData({
              ...formData,
              discount_percentage: e.target.value,
            })
          }
          style={inputStyle}
        />

        <button onClick={addCoupon} style={btnStyle}>
          Create Coupon
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
            <th style={tableHead}>Code</th>
            <th style={tableHead}>Discount</th>
            <th style={tableHead}>Status</th>
          </tr>
        </thead>

        <tbody>
          {coupons.map((coupon) => (
            <tr key={coupon.id}>
              <td style={tableCell}>{coupon.coupon_code}</td>
              <td style={tableCell}>
                {coupon.discount_percentage}%
              </td>
              <td style={tableCell}>{coupon.status}</td>
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

export default Coupons;