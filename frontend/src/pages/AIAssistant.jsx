import { useState } from "react";
import API from "../services/api";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = async () => {
    try {
      const response = await API.post(
        "/ai/ask",
        null,
        {
          params: {
            question: question,
          },
        }
      );

      setAnswer(response.data.answer);
    } catch (error) {
      console.log(error);
      alert("Failed to get AI response");
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
      <h1>🤖 AI Event Assistant</h1>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            marginBottom: "15px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={askQuestion}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Ask AI
        </button>

        {answer && (
          <div
            style={{
              marginTop: "20px",
              background: "#eff6ff",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <h3>💡 Answer</h3>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIAssistant;