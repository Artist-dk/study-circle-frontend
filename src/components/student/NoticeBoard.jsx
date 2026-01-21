import React from "react";
import "./noticeBoard.css";

const NoticeBoard = () => {
  return (
    <div className="notice-board">
      <div className="notice-header">
        <h2>📢 Notice Board</h2>
        <span className="notice-count">5 New</span>
      </div>

      <div className="notice-list">

        {/* Important Notice */}
        <div className="notice-card important">
          <span className="notice-tag">Important</span>
          <h3>Semester Exam Schedule Released</h3>
          <p>
            The semester VII examination timetable has been published.
            Students are advised to check the exam dates carefully.
          </p>
          <span className="notice-date">15 Jan 2026</span>
        </div>

        {/* Normal Notice */}
        <div className="notice-card">
          <h3>New AI Study Circle Joined</h3>
          <p>
            You have successfully joined the Artificial Intelligence
            Study Circle. Start learning today!
          </p>
          <span className="notice-date">13 Jan 2026</span>
        </div>

        {/* Notice */}
        <div className="notice-card">
          <h3>Assignment Submission Reminder</h3>
          <p>
            Full Stack Development assignment 3 must be submitted
            before 20 January 2026.
          </p>
          <span className="notice-date">12 Jan 2026</span>
        </div>

        {/* Notice */}
        <div className="notice-card">
          <h3>Certification Upload Pending</h3>
          <p>
            Please upload your Full Stack Development certificate
            to complete profile verification.
          </p>
          <span className="notice-date">10 Jan 2026</span>
        </div>

        {/* Notice */}
        <div className="notice-card">
          <h3>System Maintenance</h3>
          <p>
            Study Circle platform will be under maintenance on
            Sunday from 2 AM to 5 AM.
          </p>
          <span className="notice-date">09 Jan 2026</span>
        </div>

      </div>
    </div>
  );
};

export default NoticeBoard;
