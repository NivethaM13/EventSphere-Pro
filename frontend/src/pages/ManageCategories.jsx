import { useEffect, useState } from "react";
import API from "../services/api";

function ManageCategories() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await API.get(
        "/category/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCategory = async () => {
    try {
      await API.post(
        "/category/add-category",
        {
          category_name: categoryName,
        }
      );

      alert("Category Added Successfully");

      setCategoryName("");
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  const editCategory = async (category) => {
    const newName = prompt(
      "Enter New Category Name",
      category.category_name
    );

    if (!newName) return;

    try {
      await API.put(
        `/category/update-category/${category.id}`,
        {
          category_name: newName,
        }
      );

      alert("Category Updated Successfully");

      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await API.delete(
        `/category/delete-category/${id}`
      );

      alert("Category Deleted Successfully");

      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📂 Manage Categories</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) =>
            setCategoryName(e.target.value)
          }
          style={{
            padding: "12px",
            width: "300px",
            marginRight: "10px",
          }}
        />

        <button
          onClick={addCategory}
          style={addBtn}
        >
          Add Category
        </button>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
        }}
      >
        <thead>
          <tr>
            <th style={tableHead}>ID</th>
            <th style={tableHead}>Category Name</th>
            <th style={tableHead}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td style={tableCell}>
                {category.id}
              </td>

              <td style={tableCell}>
                {category.category_name}
              </td>

              <td style={tableCell}>
                <button
                  style={editBtn}
                  onClick={() =>
                    editCategory(category)
                  }
                >
                  Edit
                </button>

                <button
                  style={deleteBtn}
                  onClick={() =>
                    deleteCategory(category.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableHead = {
  padding: "12px",
  background: "#2563eb",
  color: "white",
};

const tableCell = {
  padding: "12px",
  border: "1px solid #ddd",
};

const addBtn = {
  padding: "10px 16px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const editBtn = {
  background: "#22c55e",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px",
};

const deleteBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default ManageCategories;