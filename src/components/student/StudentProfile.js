
import React, { useEffect, useState } from "react";
import "../../styles/student/profile.css";

const StudentProfile = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with real API later
    fetch("http://localhost:8081/api/students/1")
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching student:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading student profile...</p>;
  if (!student) return <p>No student data found.</p>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={student.profileImage || "/default-avatar.png"}
          alt="Student"
          className="profile-image"
        />

        <h2>{student.name}</h2>
        <p className="email">{student.email}</p>

        <div className="profile-info">
          <p><strong>Roll No:</strong> {student.rollNo}</p>
          <p><strong>College:</strong> {student.college}</p>
          <p><strong>Department:</strong> {student.department}</p>
          <p><strong>Year:</strong> {student.year}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
