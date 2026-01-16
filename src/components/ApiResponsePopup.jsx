import React from "react";
import "./ApiResponsePopup.css";

const ApiResponsePopup = ({ open, onClose, response }) => {
  if (!open) return null;

  const isError = response?.error || response?.success === false;

  return (
    <div className="popup-overlay">
      <div className={`popup-box ${isError ? "error" : "success"}`}>
        <h3>{isError ? "❌ Error" : "✅ Success"}</h3>

        <div className="popup-content">
          {typeof response === "object" ? (
            <pre>{JSON.stringify(response, null, 2)}</pre>
          ) : (
            <p>{response}</p>
          )}
        </div>

        <button onClick={onClose} className="popup-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default ApiResponsePopup;
