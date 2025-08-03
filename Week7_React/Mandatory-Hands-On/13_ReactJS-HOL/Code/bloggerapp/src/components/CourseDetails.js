
import React from 'react';

export const CourseDetails = ({ courses }) => {
  

  return (
    <div className="section">
      <h1>Course Details</h1>
      {courses.map((course) => (
        <div key={course.id} style={{ marginBottom: '1rem' }}>
          <h2>{course.name}</h2>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
};
