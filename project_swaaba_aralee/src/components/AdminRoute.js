import { Navigate } from 'react-router-dom';

// AdminRoute component to protect the dashboard
function AdminRoute({ children }) {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole'); // Assuming you store user roles in localStorage

  if (!token || userRole !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default AdminRoute;
