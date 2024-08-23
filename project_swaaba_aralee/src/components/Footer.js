// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // Import the Footer CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="copy-right">
          <p>&copy; {new Date().getFullYear()} Swaaba Aralee. All Rights Reserved.</p>
        </div>
        <div className="location">
          <p>Group of Future Holding<br></br>
            NAKAWA Opposite Spare Motors
            <br></br>Kampala-Uganda</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




















// // src/components/Footer.js
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer>
//       <p>&copy; {new Date().getFullYear()} Swaaba_Aralee</p>
//     </footer>
//   );
// };

// export default Footer;
