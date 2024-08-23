import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [cars, setCars] = useState([]);
  const [userActivities, setUserActivities] = useState([]);

  useEffect(() => {
    // Fetch recent inquiries
    axios.get('http://127.0.0.1:5000/api/v1/inquiries/recent')
      .then(response => setInquiries(response.data))
      .catch(error => console.error('Error fetching inquiries:', error));

    // Fetch car listings
    axios.get('http://127.0.0.1:5000/api/v1/cars')
      .then(response => setCars(response.data))
      .catch(error => console.error('Error fetching cars:', error));

    // Fetch user activities
    axios.get('http://127.0.0.1:5000/api/v1/users/activities')
      .then(response => setUserActivities(response.data))
      .catch(error => console.error('Error fetching user activities:', error));
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      <div className="dashboard-sections">
        <div className="widget">
          <h2>Recent Inquiries</h2>
          {/* Render inquiries data */}
          {inquiries.map(inquiry => (
            <div key={inquiry.id}>{inquiry.message}</div>
          ))}
        </div>
        <div className="widget">
          <h2>Car Listings</h2>
          {/* Render car listings data */}
          {cars.map(car => (
            <div key={car.id}>{car.name}</div>
          ))}
        </div>
        <div className="widget">
          <h2>User Activity</h2>
          {/* Render user activity data */}
          {userActivities.map(activity => (
            <div key={activity.id}>{activity.action}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

