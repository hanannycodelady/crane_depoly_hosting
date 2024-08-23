import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/register.css';
import registerImage from '../assets/back.png'; // Import the image

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/api/v1/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          contact,
          email,
          password,
        }),
      });

      if (response.ok) {
        setMessage('Registration successful');
        setFirstName('');
        setLastName('');
        setContact('');
        setEmail('');
        setPassword('');
        setTimeout(() => {
          setMessage('');
          navigate('/login');
        }, 2000);
      } else {
        const errorData = await response.json();
        setMessage(`Registration failed: ${errorData.error}`);
      }
    } catch (error) {
      setMessage('Registration failed: Network error');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <img src={registerImage} alt="Register" /> {/* Use the imported image */}
        <div className="register-content">
          <h2>Registration</h2>
          <form onSubmit={handleRegister}>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Contact:</label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn">Register</button>
          </form><br></br>
          {message && <p>{message}</p>}
          <button className="btn" onClick={() => navigate('/login')}>Login</button>
          <p className="swaaba">Swaaba-Aralee Limited</p>
        </div>
      </div>
    </div>
  );
};

export default Register;


















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../components/register.css';

// const Register = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [contact, setContact] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://127.0.0.1:5000/api/v1/user/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           first_name: firstName,
//           last_name: lastName,
//           contact,
//           email,
//           password,
//         }),
//       });

//       if (response.ok) {
//         setMessage('Registration successful');
//         setFirstName('');
//         setLastName('');
//         setContact('');
//         setEmail('');
//         setPassword('');
//         setTimeout(() => {
//           setMessage('');
//           navigate('/login');
//         }, 2000);
//       } else {
//         const errorData = await response.json();
//         setMessage(`Registration failed: ${errorData.error}`);
//       }
//     } catch (error) {
//       setMessage('Registration failed: Network error');
//     }
//   };

//   return (
//     <div className="register">
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label>First Name:</label>
//           <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//         </div>
//         <div>
//           <label>Contact:</label>
//           <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button type="submit" className="btn">Register</button>
//       </form>
//       {message && <p>{message}</p>}
//       <button className="btn" onClick={() => navigate('/login')}>Login</button>
//       <p className="swaaba">Swaaba-Aralee Limited</p>
//     </div>
//   );
// };

// export default Register;
