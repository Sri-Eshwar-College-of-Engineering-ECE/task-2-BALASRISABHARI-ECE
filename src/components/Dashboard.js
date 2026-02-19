import React from 'react';
import StudentView from './StudentView';
import TeacherView from './TeacherView';
import AdminView from './AdminView';

function Dashboard({ user }) {
  const renderView = () => {
    switch(user.role) {
      case 'student':
        return <StudentView user={user} />;
      case 'teacher':
        return <TeacherView user={user} />;
      case 'admin':
        return <AdminView user={user} />;
      default:
        return <div>Invalid role</div>;
    }
  };

  return (
    <div className="dashboard">
      <div className="header">
        <h1>Welcome, {user.name}!</h1>
        <p className="role-badge">{user.role}</p>
      </div>
      
      {renderView()}
    </div>
  );
}

export default Dashboard;