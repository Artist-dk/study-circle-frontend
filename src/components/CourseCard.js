import React from 'react';
// import './CourseCard.scss';
import { useState } from "react";
import { enrollUser } from '../services/newApis';

const CourseCard = ({ course }) => {

    const [message, setMessage] = useState("");
  
    const handleEnroll = async () => {
    //   if (!user) {
    //     setMessage("Please log in to enroll.");
    //     return;
    //   }
  
      const result = await enrollUser(1, course.id);
      setMessage(result.error || "Successfully enrolled!");
      console.log(message)
    };
  
    return (
        <div className="course-card">
            {console.log("Hacked-card:",course)}
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <span>{course.created_at}</span>
            <span>{course.updated_at}</span>
            <a href={course.github_repo}>{course.github_repo}</a>
            <p>{course.id}</p>        
            <button onClick={handleEnroll}>Enroll Now</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CourseCard;
