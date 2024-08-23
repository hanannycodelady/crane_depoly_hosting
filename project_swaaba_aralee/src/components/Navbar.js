import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo2.png';
import { FaHome, FaCar, FaInfoCircle, FaUserPlus } from 'react-icons/fa';
import axios from 'axios';

const Navbar = () => {
  const [userName, setUserName] = useState(localStorage.getItem("user_name"));
  const [userAvatar, setUserAvatar] = useState(localStorage.getItem("user_avatar") || "https://www.flaticon.com/free-icon/favorite-user_17588241");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_avatar");
    setUserName(null);
    setUserAvatar("https://www.flaticon.com/free-icon/favorite-user_17588241");
    window.location.reload();
  };

  useEffect(() => {
    const storedUserName = localStorage.getItem("user_name");
    const storedUserAvatar = localStorage.getItem("user_avatar") || "https://www.flaticon.com/free-icon/favorite-user_17588241";
    setUserName(storedUserName);
    setUserAvatar(storedUserAvatar);

    const checkAdmin = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (token) {
          const response = await axios.get('http://127.0.0.1:5000/api/v1/admin/check', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setIsAdmin(response.data.is_admin);
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };

    checkAdmin();
  }, []); // Empty dependency array to run only on component mount

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">SWAABA ARALEE</h1>
        <br></br>
        <br></br>
        <p>The Best Automotive</p>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/" className="navbar-link">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/cars" className="navbar-link">
            <FaCar />
            <span>Car Shop</span>
          </Link>
        </li>
        <li>
          <Link to="/categories" className="navbar-link">
            <FaCar />
            <span>Search cars by Categories</span>
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="navbar-link">
            <FaInfoCircle />
            <span>About Us</span>
          </Link>
        </li>
        {userName ? (
          <>
            <li className="navbar-link user-info">
              <img src={userAvatar} alt="User Avatar" className="user-avatar" />
              <span>{userName}</span>
            </li>
            {isAdmin && (
              <li>
                <Link to="/dashboard" className="navbar-link">
                  <FaUserPlus />
                  <span>Dashboard</span>
                </Link>
              </li>
            )}
            <li>
              <button onClick={handleLogout} className="navbar-link logout-button">
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" className="navbar-link">
              <FaUserPlus />
              <span>Login</span>
            </Link>
          </li>
        )}
        <li>
          <Link to="/register" className="navbar-link">
            <FaUserPlus />
            <span>Register</span>
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
















// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../assets/logo2.png';
// import { FaHome, FaCar, FaInfoCircle, FaUserPlus } from 'react-icons/fa';

// const Navbar = () => {
//   const handleLogout = () => {
//     localStorage.removeItem("user_id");
//     localStorage.removeItem("user_name");
//     localStorage.removeItem("access_token");
//     window.location.reload();
//   };

//   const userName = localStorage.getItem("user_name");
//   const userAvatar = localStorage.getItem("user_avatar") || "https://www.flaticon.com/free-icon/favorite-user_17588241"; // Default avatar URL

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <img src={logo} alt="Logo" className="navbar-logo" />
//         <h1 className="navbar-title">SWAABA ARALEE</h1>
//         <br></br>
//         <br></br>
//         <p>The Best Automotive</p>
//       </div>
//       <ul className="navbar-menu">
//         <li>
//           <Link to="/" className="navbar-link">
//             <FaHome />
//             <span>Home</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/cars" className="navbar-link">
//             <FaCar />
//             <span>Car Shop</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/aboutus" className="navbar-link">
//             <FaInfoCircle />
//             <span>About Us</span>
//           </Link>
//         </li>
//         {userName ? (
//           <>
//             <li className="navbar-link user-info">
//               <img src={userAvatar} alt="User Avatar" className="user-avatar" />
//               <span>{userName}</span>
//             </li>
//             <li>
//               <button onClick={handleLogout} className="navbar-link logout-button">
//                 Logout
//               </button>
//             </li>
//           </>
//         ) : (
//           <li>
//             <Link to="/login" className="navbar-link">
//               <FaUserPlus />
//               <span>Login</span>
//             </Link>
//           </li>
//         )}
//         <li>
//           <Link to="/register" className="navbar-link">
//             <FaUserPlus />
//             <span>Register</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/categories" className="navbar-link">
//             <FaCar />
//             <span>Categories</span>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



























// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../assets/logo2.png';
// import { FaHome, FaCar, FaInfoCircle, FaUserPlus } from 'react-icons/fa'; 

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <img src={logo} alt="Logo" className="navbar-logo" />
//         <h1 className="navbar-title">SWAABA ARALEE</h1>
//         <br></br>
//         <br></br>
//         <p>The Best Automotive</p>
//       </div>
//       <ul className="navbar-menu">
//         <li>
//           <Link to="/" className="navbar-link">
//             <FaHome />
//             <span>Home</span> {/* Text under Home icon */}
//           </Link>
//         </li>
//         <li>
//           <Link to="/cars" className="navbar-link">
//             <FaCar />
//             <span>Car Shop</span> {/* Text under Car Shop icon */}
//           </Link>
//         </li>
//         <li>
//           <Link to="/aboutus" className="navbar-link">
//             <FaInfoCircle />
//             <span>About Us</span> {/* Text under About Us icon */}
//           </Link>
//         </li>
//         <li>
//           <Link to="/Login" className="navbar-link">
//             <FaUserPlus />
//             <span>Login</span> {/* Text under Sign Up icon */}
//           </Link>
//         </li>
//         <li>
//           {/* <Link to="/transactions" className="navbar-link">
//             <FaExchangeAlt />
//             <span>Transactions</span>
//           </Link> */}
//         </li>
//         <li>
//           <Link to="/Register" className="navbar-link">
//             < FaUserPlus/>
//             <span>Register</span> {/* Text under Autoshowcase icon */}
//           </Link>
//         </li>
//         <li>
//           <Link to="/categories" className="navbar-link">
//             <FaCar />
//             <span>Categories</span> {/* Text under Categories icon */}
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
