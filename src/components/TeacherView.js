import React, { useState } from 'react';

function TeacherView({ user }) {
  const [myCourses] = useState([
    { id: 1, name: 'Mathematics 101', students: 25, progress: '75%' },
    { id: 2, name: 'Advanced Algebra', students: 18, progress: '45%' }
  ]);

  const [recentSubmissions] = useState([
    { id: 1, student: 'Alice Johnson', assignment: 'Quiz 3', grade: 85 },
    { id: 2, student: 'Bob Smith', assignment: 'Homework 2', grade: 92 },
    { id: 3, student: 'Carol White', assignment: 'Quiz 3', grade: 78 }
  ]);

  return (
    <div className="view-container teacher-view">
      <div className="welcome-card">
        <h2>Teacher Dashboard</h2>
        <p>Manage your courses and students</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Active Courses</h3>
          <p className="stat-number">{myCourses.length}</p>
        </div>
        <div className="stat-card">
          <h3>Total Students</h3>
          <p className="stat-number">43</p>
        </div>
        <div className="stat-card">
          <h3>Pending Grades</h3>
          <p className="stat-number">12</p>
        </div>
      </div>

      <div className="section">
        <h3>My Courses</h3>
        <div className="courses-grid">
          {myCourses.map(course => (
            <div key={course.id} className="course-management-card">
              <h4>{course.name}</h4>
              <p>Students: {course.students}</p>
              <p>Avg Progress: {course.progress}</p>
              <div className="card-actions">
                <button className="btn-small">View Roster</button>
                <button className="btn-small">Add Assignment</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Recent Submissions</h3>
        <table className="submissions-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Assignment</th>
              <th>Grade</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recentSubmissions.map(sub => (
              <tr key={sub.id}>
                <td>{sub.student}</td>
                <td>{sub.assignment}</td>
                <td>{sub.grade}</td>
                <td>
                  <button className="btn-small">Grade</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="quick-actions">
        <button className="btn-primary">Create New Assignment</button>
        <button className="btn-primary">Send Announcement</button>
      </div>
    </div>
  );
}

export default TeacherView;