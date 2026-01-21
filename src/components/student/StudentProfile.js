
import React, { useEffect, useState } from "react";
import "../../styles/student/profile.css";
import "./StudentCalendar"
import StudentCalendar from "./StudentCalendar";

const a1_i1 = "https://i.pinimg.com/736x/cb/2a/59/cb2a597163103f0506f4418da1ec4186.jpg";
const a1_i2 = "https://i.pinimg.com/736x/cb/2a/59/cb2a597163103f0506f4418da1ec4186.jpg";
const a1_i3 = "https://i.pinimg.com/736x/cb/2a/59/cb2a597163103f0506f4418da1ec4186.jpg";



const StudentProfile = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Replace with real API later
  //   fetch("http://localhost:8081/api/students/1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setStudent(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching student:", err);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <p>Loading student profile...</p>;
  // if (!student) return <p>No student data found.</p>;

  return (
    <div className="profile-container">

    <div className="welcome-page">
      {/* Left Section - Profile */}
      <div className="welcome-left">
        <h1>Welcome Back, Digambar!</h1>
        <p className="welcome-subtitle">
          Glad to see you continuing your learning journey. Here’s your profile and course progress.
        </p>

        <div className="a2-profile-card">
          <img src={a1_i3} alt="Student" className="profile-image" />
          <h2>Digambar Kumbhar</h2>
          <p className="a2-email">digambarckumbhar@gmail.com</p>

          <div className="profile-info">
            <p><strong>Roll No:</strong> 12244</p>
            <p><strong>College:</strong> Shri Tuljabhavani College of Engineering, Tuljapur</p>
            <p><strong>Department:</strong> Computer Science and Engineering</p>
            <p><strong>Year:</strong> 4th</p>
          </div>
        </div>
      </div>

    </div>







{/* Professional Details Section */}
<div className="professional-section">
  <h2>Professional Details</h2>

  <div className="professional-card">

    <div className="pro-row">
      <span className="pro-label">Career Goal</span>
      <span className="pro-value">Full Stack Developer / Cyber Security Analyst</span>
    </div>

    <div className="pro-row">
      <span className="pro-label">Primary Skills</span>
      <span className="pro-value">
        React.js, Node.js, Express.js, MySQL, MongoDB, Cypress, API Testing
      </span>
    </div>

    <div className="pro-row">
      <span className="pro-label">Secondary Skills</span>
      <span className="pro-value">
        Ethical Hacking, Linux, Git & GitHub, Postman, TypeScript
      </span>
    </div>

    <div className="pro-row">
      <span className="pro-label">Internship Status</span>
      <span className="pro-tag available">Open for Internship</span>
    </div>

    <div className="pro-row">
      <span className="pro-label">Experience Level</span>
      <span className="pro-tag fresher">Fresher</span>
    </div>

    <div className="pro-row">
      <span className="pro-label">Preferred Role</span>
      <span className="pro-value">
        Software Developer, QA Automation Engineer
      </span>
    </div>

    <div className="pro-row">
      <span className="pro-label">GitHub</span>
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="pro-link"
      >
        github.com/your-username
      </a>
    </div>

    <div className="pro-row">
      <span className="pro-label">LinkedIn</span>
      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="pro-link"
      >
        linkedin.com/in/your-profile
      </a>
    </div>

  </div>
</div>




{/* Work Experience Section */}
<div className="experience-section">
  <h2>Work Experience & Work History</h2>

  <div className="experience-timeline">

    {/* Experience Item */}
    <div className="experience-item">
      <div className="exp-dot"></div>

      <div className="experience-card">
        <h3>QA Automation Engineer (Intern)</h3>
        <span className="exp-company">Cybromatech Technology Pvt Ltd</span>
        <span className="exp-duration">March 2025 – Present</span>

        <p className="exp-desc">
          Worked on automation testing using Cypress and Playwright.
          Designed test cases, automated regression suites, and performed
          API testing using Postman. Collaborated with developers to identify
          and resolve defects efficiently.
        </p>

        <div className="exp-skills">
          <span>Cypress</span>
          <span>Playwright</span>
          <span>API Testing</span>
          <span>JavaScript</span>
          <span>Git</span>
        </div>
      </div>
    </div>

    {/* Experience Item */}
    <div className="experience-item">
      <div className="exp-dot"></div>

      <div className="experience-card">
        <h3>Full Stack Developer (Project-Based)</h3>
        <span className="exp-company">Study Circle Platform</span>
        <span className="exp-duration">January 2025 – Present</span>

        <p className="exp-desc">
          Developed a full-stack university management platform using
          MERN stack and MySQL. Implemented authentication, role-based
          access control, REST APIs, and frontend dashboards.
        </p>

        <div className="exp-skills">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MySQL</span>
          <span>JWT</span>
        </div>
      </div>
    </div>

    {/* Experience Item */}
    <div className="experience-item">
      <div className="exp-dot"></div>

      <div className="experience-card">
        <h3>Cyber Security Trainee</h3>
        <span className="exp-company">Self-Learning / Online Labs</span>
        <span className="exp-duration">August 2024 – December 2024</span>

        <p className="exp-desc">
          Hands-on practice in ethical hacking, vulnerability assessment,
          Linux commands, networking fundamentals, and basic penetration
          testing techniques.
        </p>

        <div className="exp-skills">
          <span>Ethical Hacking</span>
          <span>Linux</span>
          <span>Networking</span>
          <span>Security Tools</span>
        </div>
      </div>
    </div>

  </div>
</div>



{/* Student Activity Section */}
<div className="student-activity">
  <h2>Your Learning Activity</h2>

  <div className="activity-grid">
    
    <StudentCalendar />
    {/* Calendar */}
    {/* <div className="calendar-card">
      <h3>Study Calendar</h3>

      <div className="calendar">
        <div className="calendar-header">
          <span>Sun</span><span>Mon</span><span>Tue</span>
          <span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
        </div>

        <div className="calendar-body">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className={`calendar-day ${index % 4 === 0 ? "active" : ""}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div> */}

    {/* Progress Chart */}
    <div className="progress-card">
      <h3>Overall Progress</h3>

      <div className="progress-circle">
        <span>53%</span>
      </div>

      <p className="progress-text">
        You’ve completed <strong>53%</strong> of your enrolled courses.
      </p>
    </div>

  </div>
</div>











{/* Joined Study Circles Section */}
<div className="joined-circles">
  <h2>Joined Study Circles</h2>

  <div className="circle-list">
    <div className="circle-card">
      <div className="circle-header">
        <img
          src={a1_i3}
          alt="AI Circle"
          className="circle-logo"
        />
        <h3>AI Learners Circle</h3>
      </div>

      <p>Focused on Machine Learning, Deep Learning, and AI projects.</p>
      <span className="circle-meta">Members: 48 • Level: Intermediate</span>
    </div>

    <div className="circle-card">
      <div className="circle-header">
        <img
          src={a1_i3}
          alt="Full Stack Circle"
          className="circle-logo"
        />
        <h3>Full Stack Developers</h3>
      </div>

      <p>MERN stack development, system design, and real-world projects.</p>
      <span className="circle-meta">Members: 62 • Level: Advanced</span>
    </div>

    <div className="circle-card">
      <div className="circle-header">
        <img
          src={a1_i3}
          alt="Cybersecurity Circle"
          className="circle-logo"
        />
        <h3>Cybersecurity & Hacking</h3>
      </div>

      <p>Ethical hacking, CTF practice, vulnerability analysis.</p>
      <span className="circle-meta">Members: 35 • Level: Beginner</span>
    </div>
  </div>
</div>

      {/* <div className="a2-profile-card">
        {/* <img
          // src={student.profileImage || "/default-avatar.png"}
          alt="Student"
          className="profile-image"
        /> */}

        {/* <h2>Digambar Kumbhar</h2>
        <p className="a2-email">digambarckumbhar@gmail.com</p>

        <div className="profile-info">
          <p><strong>Roll No:</strong> 12244</p>
          <p><strong>College:</strong> Shri Tuljabhavani College of Engineering, Tuljapur</p>
          <p><strong>Department:</strong> Computer Science and Engineering </p>
          <p><strong>Year:</strong> 4th </p>
        </div>
      </div> */}





{/* Results Section */}
<div className="results-section">
  <h2>Your Academic Results</h2>

  {/* Overall Result Card */}
  <div className="overall-result-card">
    <div className="overall-score">
      <h1>8.4</h1>
      <p>CGPA</p>
    </div>

    <div className="overall-info">
      <p><strong>Status:</strong> Passed</p>
      <p><strong>Semester:</strong> VII</p>
      <p><strong>Performance:</strong> Very Good</p>
    </div>
  </div>

  {/* Subject-wise Results */}
  <div className="subject-results">
    
    <div className="subject-card">
      <h3>Cyber Security</h3>
      <span className="grade grade-a">A</span>
      <div className="marks-bar">
        <div className="marks-fill" style={{ width: "85%" }}></div>
      </div>
      <p>Marks: 85 / 100</p>
    </div>

    <div className="subject-card">
      <h3>Artificial Intelligence</h3>
      <span className="grade grade-b">B+</span>
      <div className="marks-bar">
        <div className="marks-fill" style={{ width: "72%" }}></div>
      </div>
      <p>Marks: 72 / 100</p>
    </div>

    <div className="subject-card">
      <h3>Full Stack Development</h3>
      <span className="grade grade-a">A</span>
      <div className="marks-bar">
        <div className="marks-fill" style={{ width: "90%" }}></div>
      </div>
      <p>Marks: 90 / 100</p>
    </div>

    <div className="subject-card">
      <h3>Software Testing</h3>
      <span className="grade grade-b">B</span>
      <div className="marks-bar">
        <div className="marks-fill" style={{ width: "68%" }}></div>
      </div>
      <p>Marks: 68 / 100</p>
    </div>

  </div>
</div>




{/* Certifications Section */}
<div className="certifications-section">
  <h2>Your Certifications</h2>

  <div className="certification-list">

    <div className="certification-card">
      <div className="cert-icon">🎓</div>
      <div className="cert-body">
        <h3>Ethical Hacking</h3>
        <p>Issued by: EC-Council</p>
        <p>Date: March 2025</p>
      </div>
      <span className="cert-status verified">Verified</span>
    </div>

    <div className="certification-card">
      <div className="cert-icon">🤖</div>
      <div className="cert-body">
        <h3>Artificial Intelligence Foundations</h3>
        <p>Issued by: Coursera</p>
        <p>Date: January 2025</p>
      </div>
      <span className="cert-status verified">Verified</span>
    </div>

    <div className="certification-card">
      <div className="cert-icon">💻</div>
      <div className="cert-body">
        <h3>Full Stack Web Development (MERN)</h3>
        <p>Issued by: Study Circle</p>
        <p>Date: December 2024</p>
      </div>
      <span className="cert-status pending">Pending</span>
    </div>

    <div className="certification-card">
      <div className="cert-icon">🧪</div>
      <div className="cert-body">
        <h3>Software Testing with Cypress</h3>
        <p>Issued by: Udemy</p>
        <p>Date: November 2024</p>
      </div>
      <span className="cert-status verified">Verified</span>
    </div>

  </div>
</div>












{/* Courses You're Taking Section */}
<div className="courses-section">
  <h2>Courses You're Taking</h2>

  <div className="courses-grid">

    {/* Course Card */}
    <div className="course-card">
      <div className="course-image">
        <img
          src="https://i.pinimg.com/736x/cb/2a/59/cb2a597163103f0506f4418da1ec4186.jpg"
          alt="Hacking"
        />
      </div>

      <div className="course-body">
        <h3>Ethical Hacking</h3>
        <p>
          Information Security, Cryptography, Malware Analysis,
          Vulnerability Assessment, SOC, Incident Response,
          Network Forensics, Bug Bounty.
        </p>

        <div className="course-meta">
          <span className="course-level">Advanced</span>
          <span className="course-duration">6 Months</span>
        </div>
      </div>

      <div className="course-progress">
        <div className="progress-circle p80">80%</div>
      </div>
    </div>

    {/* Course Card */}
    <div className="course-card">
      <div className="course-image">
        <img
          src="https://i.pinimg.com/736x/cb/2a/59/cb2a597163103f0506f4418da1ec4186.jpg"
          alt="AI"
        />
      </div>

      <div className="course-body">
        <h3>Artificial Intelligence</h3>
        <p>
          Machine Learning, Deep Learning, NLP,
          Computer Vision, Reinforcement Learning,
          Generative AI, LLMs.
        </p>

        <div className="course-meta">
          <span className="course-level">Intermediate</span>
          <span className="course-duration">5 Months</span>
        </div>
      </div>

      <div className="course-progress">
        <div className="progress-circle p30">30%</div>
      </div>
    </div>

    {/* Course Card */}
    <div className="course-card">
      <div className="course-image">
        <img
          src="https://i.pinimg.com/736x/cb/2a/59/cb2a597163103f0506f4418da1ec4186.jpg"
          alt="Full Stack"
        />
      </div>

      <div className="course-body">
        <h3>Full Stack Development</h3>
        <p>
          HTML, CSS, JavaScript, React, Node.js,
          Express, MySQL, MERN, DevOps basics.
        </p>

        <div className="course-meta">
          <span className="course-level">Intermediate</span>
          <span className="course-duration">6 Months</span>
        </div>
      </div>

      <div className="course-progress">
        <div className="progress-circle p50">50%</div>
      </div>
    </div>

  </div>
</div>






      <div className="a2-suggetions">

      </div>
    </div>
  );
};

export default StudentProfile;
