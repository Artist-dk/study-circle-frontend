import React, { useState } from "react";
import "./studentCalendar.css";

const MONTHS = [
  "January","February","March","April",
  "May","June","July","August",
  "September","October","November","December"
];



const StudentCalendar = ({ highlightedDates = [
  { date: "2026-1-26", type: "holiday", label: "Republic Day" },
  { date: "2026-2-10", type: "exam", label: "Mid-Term Exam" },
  { date: "2026-3-5", type: "event", label: "Hackathon" },
], onDateSelect }) => {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const startYear = today.getFullYear() - 50;
  const endYear = today.getFullYear() + 50;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const isHighlighted = (day) => {
    const current = `${year}-${month + 1}-${day}`;
    return highlightedDates.find(d => d.date === current);
  };

  const handleDateClick = (day) => {
    const date = new Date(year, month, day);
    setSelectedDate(date);
    onDateSelect?.(date);
  };

  return (
    <div className="student-calendar">
      <h3>📅 Student Calendar</h3>

      {/* Controls */}
      <div className="calendar-controls">
        <select value={month} onChange={(e) => setMonth(+e.target.value)}>
          {MONTHS.map((m, i) => (
            <option key={i} value={i}>{m}</option>
          ))}
        </select>

        <select value={year} onChange={(e) => setYear(+e.target.value)}>
          {Array.from({ length: endYear - startYear + 1 }).map((_, i) => {
            const y = startYear + i;
            return <option key={y} value={y}>{y}</option>;
          })}
        </select>
      </div>

      {/* Weekdays */}
      <div className="calendar-grid calendar-weekdays">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
          <span key={d}>{d}</span>
        ))}
      </div>

      {/* Dates */}
      <div className="calendar-grid">
        {[...Array(firstDay)].map((_, i) => (
          <span key={`empty-${i}`} />
        ))}

        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const highlight = isHighlighted(day);

          return (
            <span
              key={day}
              onClick={() => handleDateClick(day)}
              className={`calendar-day
                ${highlight ? `highlight-${highlight.type}` : ""}
                ${
                  selectedDate &&
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === month &&
                  selectedDate.getFullYear() === year
                    ? "selected"
                    : ""
                }
              `}
              title={highlight?.label || ""}
            >
              {day}
            </span>
          );
        })}
      </div>

      {selectedDate && (
        <p className="selected-info">
          Selected: {selectedDate.toDateString()}
        </p>
      )}
    </div>
  );
};

export default StudentCalendar;
