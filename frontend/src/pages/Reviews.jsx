import { useEffect, useState } from "react";
import API from "../services/api";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  const [formData, setFormData] = useState({
    user_id: 1,
    event_id: 1,
    rating: 5,
    review: "",
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await API.get("/reviews/");
      setReviews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitReview = async () => {
    try {
      await API.post("/reviews/add", formData);

      alert("Review Added Successfully");

      setFormData({
        ...formData,
        review: "",
      });

      fetchReviews();
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
      <h1>⭐ Reviews & Ratings</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "30px",
        }}
      >
        <h3>Add Review</h3>

        <input
          type="number"
          placeholder="Rating (1-5)"
          value={formData.rating}
          onChange={(e) =>
            setFormData({
              ...formData,
              rating: e.target.value,
            })
          }
          style={inputStyle}
        />

        <textarea
          placeholder="Write your review..."
          value={formData.review}
          onChange={(e) =>
            setFormData({
              ...formData,
              review: e.target.value,
            })
          }
          style={{
            ...inputStyle,
            height: "100px",
          }}
        />

        <button
          onClick={submitReview}
          style={btnStyle}
        >
          Submit Review
        </button>
      </div>

      <div>
        {reviews.map((review) => (
          <div
            key={review.id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              marginBottom: "15px",
            }}
          >
            <h3>⭐ {review.rating}/5</h3>

            <p>{review.review}</p>

            <small>
              Event ID: {review.event_id}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #ddd",
};

const btnStyle = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  cursor: "pointer",
};

export default Reviews;