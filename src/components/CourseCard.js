import React from 'react';
// import './CourseCard.scss';

const CourseCard = ({ course }) => {
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
        </div>
    );
};

export default CourseCard;
