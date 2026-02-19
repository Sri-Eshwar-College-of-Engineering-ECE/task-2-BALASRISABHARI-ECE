import React, { useState } from 'react';

function AdminView({ user }) {
  const [users] = useState([
    { id: 1, name: 'John Student', role: 'student', status: 'active' },
    { id: 2, name: 'Ms. Smith', role: 'teacher', status: 'active' },
    { id: 3, name: 'Jane Doe', role: 'student', status: 'inactive' },
    { id: 4, name: 'Mr. Johnson', role: 'teacher', status: 'active' }
  ]);

  const [reports] = useState([
    { id: 1, title: 'Monthly Activity Report', date: '2024-03-01' },
    { id: 2, title: 'Course Completion Stats', date: '2024-03-15' }
  ]);

  return (
    <div className="view-container admin-view">
      <div className="welcome-card">
        <h2>Admin Dashboard</h2>
        <p>System overview and management</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">156</p>
        </div>
        <div className="stat-card">
          <h3>Active Courses</h3>
          <p className="stat-number">24</p>
        </div>
        <div className="stat-card">
          <h3>Reports</h3>
          <p className="stat-number">8</p>
        </div>
      </div>

      <div className="admin-grid">
        <div className="section">
          <h3>User Management</h3>
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`status ${user.status}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn-small">Edit</button>
                    <button className="btn-small btn-danger">Suspend</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn-primary">Add New User</button>
        </div>

        <div className="section">
          <h3>System Reports</h3>
          <ul className="reports-list">
            {reports.map(report => (
              <li key={report.id} className="report-item">
                <span>{report.title}</span>
                <span className="report-date">{report.date}</span>
                <button className="btn-small">Download</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <button className="btn-secondary">Create Course</button>
            <button className="btn-secondary">Generate Report</button>
            <button className="btn-secondary">System Settings</button>
            <button className="btn-secondary">Backup Data</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminView;