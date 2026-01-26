import axios from "axios";
import React, { useState } from "react";

function TestMain() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8081/register", form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Error submitting form");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default TestMain;
