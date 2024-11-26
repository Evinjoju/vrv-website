// src/pages/UserDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { getUsers } from '../services/api';  // Import the required API function
import './UserDashboard.css';

const UserDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();  // Call the getUsers function from api.jsx
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <Container>
      <h2 className="mt-3">User Dashboard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserDashboard;