import React, { useEffect, useState } from 'react';
import { fetchCourses, enrollUser } from '../services/newApis';
import CourseCard from '../components/CourseCard';
// import { enrollInCourse } from "../api";

const CourseListing = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCourses = async () => {
            try {
                const data = await fetchCourses();
                console.log("API Response:", data);

                if (data && Array.isArray(data.courses)) {
                    setCourses(data.courses);
                } else if (Array.isArray(data)) {
                    setCourses(data);
                } else {
                    console.error("Unexpected API response format:", data);
                    setCourses([]);
                }
            } catch (error) {
                console.error("Error fetching courses:", error);
                setCourses([]);
            } finally {
                setLoading(false);
            }
        };
        loadCourses();
    }, []);

    return (
        <div className="course-listing">
            <h2>Available Courses</h2>

            {loading ? (
                <p>Loading courses...</p>
            ) : courses.length > 0 ? (
                <div className="grid">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} api={enrollUser} />
                    ))}
                </div>
            ) : (
                <p>No courses available.</p>
            )}
        </div>
    );
};

export default CourseListing;
