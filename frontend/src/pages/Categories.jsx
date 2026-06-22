import { useEffect, useState } from "react";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get(
      "http://127.0.0.1:8000/category/categories"
    );

    setCategories(res.data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Event Categories</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.id}
            style={{
              background: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3>{cat.category_name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;