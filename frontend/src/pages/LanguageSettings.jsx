import { useState } from "react";
import API from "../services/api";

function LanguageSettings() {
  const [language, setLanguage] = useState("English");

  const saveLanguage = async () => {
    try {
      await API.post("/language/save", {
        user_email: "nivetha@gmail.com",
        language: language,
      });

      alert("Language Preference Saved");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🌐 Multi-Language Support</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "20px",
          maxWidth: "400px",
        }}
      >
        <label>Select Language</label>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
          }}
        >
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>

        <button
          onClick={saveLanguage}
          style={{
            marginTop: "15px",
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Save Preference
        </button>

        <h3 style={{ marginTop: "20px" }}>
          Current Language: {language}
        </h3>
      </div>
    </div>
  );
}

export default LanguageSettings;