import React, { useEffect, useState } from "react";
import "./keepRecords.css";

const KeepRecords = () => {
  const [records, setRecords] = useState([]);
  const [text, setText] = useState("");

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("study_records")) || [];
    setRecords(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("study_records", JSON.stringify(records));
  }, [records]);

  const addRecord = () => {
    if (!text.trim()) return;

    setRecords([
      ...records,
      {
        id: Date.now(),
        text,
        date: new Date().toLocaleDateString(),
      },
    ]);
    setText("");
  };

  const deleteRecord = (id) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="records-section">
      <h2>📘 Keep Records</h2>

      <div className="records-input">
        <input
          type="text"
          placeholder="Write your record..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addRecord}>Add</button>
      </div>

      <div className="records-list">
        {records.map((record) => (
          <div key={record.id} className="record-card">
            <p>{record.text}</p>
            <div className="record-footer">
              <span>{record.date}</span>
              <button onClick={() => deleteRecord(record.id)}>❌</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeepRecords;
