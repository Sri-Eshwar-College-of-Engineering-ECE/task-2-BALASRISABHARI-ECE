import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import './styles.css';

function App() {
  const [currentUser, setCurrentUser] = useState('student'); // Default role

  const users = {
    student: { name: 'John Student', role: 'student', id: 1 },
    teacher: { name: 'Ms. Smith', role: 'teacher', id: 2 },
    admin: { name: 'Admin User', role: 'admin', id: 3 }
  };

  return (
    <div className="app">
      <div className="role-selector">
        <h2>Select Role:</h2>
        <button onClick={() => setCurrentUser('student')}>Student</button>
        <button onClick={() => setCurrentUser('teacher')}>Teacher</button>
        <button onClick={() => setCurrentUser('admin')}>Admin</button>
      </div>
      
      <Dashboard user={users[currentUser]} />
    </div>
  );
}

export default App;