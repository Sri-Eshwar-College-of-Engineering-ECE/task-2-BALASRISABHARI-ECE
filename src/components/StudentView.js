import React, { useState } from 'react';

function StudentView({ user }) {
  const [courses] = useState([
    { id: 1, name: 'Mathematics 101', progress: 75, instructor: 'Ms. Smith' },
    { id: 2, name: 'English Literature', progress: 45, instructor: 'Mr. Johnson' },
    { id: 3, name: 'Science Basics', progress: 90, instructor: 'Dr. Brown' }
  ]);

  const [assignments] = useState([
    { id: 1, title: 'Algebra Quiz', due: '2024-03-25', status: 'pending' },
    { id: 2, title: 'Essay Draft', due: '2024-03-28', status: 'submitted' },
  ]);

  return (
    <div className="view-container student-view">
      <div className="welcome-card">
        <h2>My Learning Dashboard</h2>
        <p>Continue your learning journey!</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Courses Enrolled</h3>
          <p className="stat-number">{courses.length}</p>
        </div>
        <div className="stat-card">
          <h3>Assignments</h3>
          <p className="stat-number">{assignments.length}</p>
        </div>
        <div className="stat-card">
          <h3>Overall Progress</h3>
          <p className="stat-number">70%</p>
        </div>
      </div>

      <div className="section">
        <h3>My Courses</h3>
        <div className="courses-list">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <h4>{course.name}</h4>
              <p>Instructor: {course.instructor}</p>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{width: `${course.progress}%`}}
                ></div>
              </div>
              <span>{course.progress}% Complete</span>
              <button className="btn-small">Continue</button>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Upcoming Assignments</h3>
        <ul className="assignments-list">
          {assignments.map(assignment => (
            <li key={assignment.id} className="assignment-item">
              <span>{assignment.title}</span>
              <span className="due-date">Due: {assignment.due}</span>
              <span className={`status ${assignment.status}`}>
                {assignment.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentView;