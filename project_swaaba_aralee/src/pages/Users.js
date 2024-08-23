import React, { useState } from 'react';
// Import the correct form for user registration or addition
// import UserForm from '../components/UserForm'; // Adjust this import to your actual UserForm component
import UserForm from '../pages/Login'; // If this is intentional, ensure Login can handle user additions

const Users = () => {
  const [users, setUsers] = useState([]);

  const handleUserSubmit = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <h1>Users</h1>
      <UserForm onSubmit={handleUserSubmit} />
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.firstName} {user.lastName} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
