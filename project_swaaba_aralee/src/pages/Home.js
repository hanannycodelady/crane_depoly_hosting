import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import '../styles/AboutUs.css';
import BackgroundSlider from '../components/BackgroundSlider';
import Typewriter from 'typewriter-effect';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/home.css';
import image1 from '../assets/swaaba1.png';
import image2 from '../assets/swaaba7.png';
import image3 from '../assets/swaaba2.png';
import image4 from '../assets/swaaba9.png';
import image5 from '../assets/swaaba8.png';
import image6 from '../assets/swaaba10.png';
import video from '../assets/swaaba11.mp4';

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const images = [
    { 
      src: image1, 
      alt: 'Description 1', 
      description: '2022 Tesla Model S Plaid is a cutting-edge electric vehicle.',
    },
    { 
      src: image2, 
      alt: 'Description 2', 
      description: 'It is available in 3 variants, 2982 cc engine option.',
    },
    { 
      src: image3, 
      alt: 'Description 3', 
      description: 'Battery and Drive Unit: 8 years or 150,000 miles, Basic',
      carId: 72
    },
    { 
      src: image4, 
      alt: 'Description 4', 
      description: 'Battery and Drive Unit: 8 years or 150,000 miles, Basic Vehicle',
    },
    { 
      src: image5, 
      alt: 'Description 5', 
      description: 'Battery and Drive Unit: 8 years or 150,000 miles, Basic Vehicle',
    },
    { 
      src: image6, 
      alt: 'Description 6', 
      description: 'Battery and Drive Unit: 8 years or 150,000 miles.',
    },
  ];

  const handleImageClick = (carId) => {
    navigate(`/cars/${carId}`); // Navigate to CarList with carId as a parameter
  };

  return (
    <div className="home-container">
      <BackgroundSlider />
      <div className='text'>
        <h1>FIND YOUR PERFECT RIDE!</h1>
        <Typewriter
          options={{
            strings: ['Just Keep Moving Forward'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <h3 className="section-title">Explore the latest Rides</h3>
      <div className="image-slider">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="image-card"
            onClick={() => handleImageClick(index)} 
          >
            <img src={image.src} alt={image.alt} className="image" />
            <div className="description">{image.description}</div>
          </div>
        ))}
      </div>
      <br /><br />
      <div className="video-section">
        <div className="video-container">
          <video controls className="video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-text">
          <h2>Get a fair Price for Your Desired Car Today</h2>
          <p>Sell to us Your Car Today.</p>
          <div className="bullet-list">
            <ul>
              <li>Discover a curated collection of meticulously inspected and expertly curated vehicles at Swaab Aralee Cars.</li>
              <li>We specialize in offering a diverse range of cars that cater to every lifestyle and budget.</li>
              <li>Whether you're searching for a sleek sedan, a versatile SUV, or a powerful sports car, you'll find it here.</li>
            </ul>
            <a href="/contact" className="contact-button">
              Get Started
            </a>
          </div>
        </div>
        {/* <div
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
          onClick={() => window.botpressWebChat.sendEvent({ type: 'show' })}
        >
          <button className="chatbot-button">Chat with us</button>
        </div> */}
      </div>
      <FAQ />
      <Footer name='Footer' />
    </div>
  );
};

export default Home;

















// import React from 'react';
// import Footer from '../components/Footer';
// import FAQ from '../components/FAQ'; // Make sure the import path is correct
// import '../styles/AboutUs.css';
// import BackgroundSlider from '../components/BackgroundSlider';
// import Typewriter from 'typewriter-effect';
// import '../App.css'; // Import the main CSS file if needed
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import '../styles/home.css';
// import image1 from '../assets/swaaba1.png';
// import image2 from '../assets/swaaba7.png';
// import image3 from '../assets/swaaba2.png';
// import image4 from '../assets/swaaba9.png';
// import image5 from '../assets/swaaba8.png';
// import image6 from '../assets/swaaba10.png';
// import video from '../assets/swaaba11.mp4'; // Replace with your video file import

// const Home = () => {
//   const images = [
//     { 
//       src: image1, 
//       alt: 'Description 1', 
//       description: '2022 Tesla Model S Plaid is a cutting-edge electric vehicle that combines luxury, performance' 
//     },
//     { 
//       src: image2, 
//       alt: 'Description 2', 
//       description: `It is available in 3 variants, 2982 cc engine option and 1 transmission option : Automatic
//       Autopilot:.
//       ` 
//     },
//     { 
//       src: image3, 
//       alt: 'Description 3', 
//       description: `Battery and Drive Unit: 8 years or 150,000 miles
//       Basic Vehicle: 4 years or 50,000 miles
//       
//     },

//     { 
//       src: image4, 
//       alt: 'Description 3', 
//       description: `Battery and Drive Unit: 8 years or 150,000 miles
//       Basic Vehicle: 4 years or 50,000 miles
//       24/7` 
//     },
//     { 
//       src: image5, 
//       alt: 'Description 3', 
//       description: `Battery and Drive Unit: 8 years or 150,000 miles
//       Basic Vehicle: 4 years or 50,000 miles
//       ` 
//     },

//     { 
//       src: image6, 
//       alt: 'Description 3', 
//       description: `Battery and Drive Unit: 8 years or 150,000 miles
//       Basic Vehicle: 4 years or 50,000 miles
//       ` 
//     },
//   ];
  
  
//   return (
//     <div className="home-container">
//       <BackgroundSlider /> {BackgroundSlider}
//       <div className='text'>
//         <h1>FIND YOUR PERFECT RIDE!</h1>
//         <Typewriter
//           options={{
//             strings: ['Just Keep Moving Forward'],
//             autoStart: true,
//             loop: true,
//           }}
//         />
//       </div>
//       <h3 className="section-title">Explore the latest Rides</h3>
//       <div className="image-slider">
//         {images.map((image, index) => (
//           <div key={index} className="image-card">
//             <img src={image.src} alt={image.alt} className="image" />
//             <div className="description">{image.description}</div>
//           </div>
//         ))}
//       </div>
//       <br></br><br></br>
//       <div className="video-section">
//         <div className="video-container">
//           <video controls className="video">
//             <source src={video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="video-text">
//   <h2>Get a fair Price for Your Desired Car Today</h2>
//   <p>Sell to us Your Car Today.</p>
//   <div className="bullet-list">
//     <ul>
//       <li>Discover a curated collection of meticulously inspected and expertly curated vehicles at Swaab Aralee Cars.</li>
//       <li>We specialize in offering a diverse range of cars that cater to every lifestyle and budget.</li>
//       <li>Whether you're searching for a sleek sedan, a versatile SUV, or a powerful sports car, you'll find it here.</li>
//     </ul>
//     <a href="/contact" className="contact-button">
//     Get Started
//   </a>
//   </div>
// </div>
// {/* Chatbot Button */}
// <div
//         style={{ position: 'fixed', bottom: '20px', right: '20px' }}
//         onClick={() => window.botpressWebChat.sendEvent({ type: 'show' })}
//       >
//         <button className="chatbot-button">Chat with us</button>
//       </div>
//       </div>
//       <FAQ />
      
//       <Footer name='Footer' />
      
//     </div>
//   );
// };

// export default Home;




























// import React from 'react';
// import Footer from '../components/Footer';
// import FAQ from '../components/FAQ'; // Make sure the import path is correct
// import '../styles/AboutUs.css';
// import Typewriter from 'typewriter-effect';
// import '../App.css'; // Import the main CSS file if needed
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import '../styles/home.css';
// import image1 from '../assets/swaaba1.png';
// import image2 from '../assets/swaab7.jpg';
// import image3 from '../assets/swaaba2.png';

// const Home = () => {
//   const images = [
//       { src: image1, alt: 'Description 1', description: '2022 Tesla Model S Plaid is a cutting-edge electric vehicle that combines luxury, performance' },
//       { src: image2, alt: 'Description 2', description: 'It is available in 3 variants, 2982 cc engine option and 1 transmission option : Automatic' },
//       { src: image3, alt: 'Description 3', description: 'This is the third image description' },
//     ];

//   return (
//     <div className="home-container">
//       <div className='text'>
//         <h1>FIND YOUR PERFECT RIDE!</h1>
//         <Typewriter
//           options={{
//             strings: ['Just Keep Moving Forward'],
//             autoStart: true,
//             loop: true,
//           }}
//         />
//         {/* <i className="fas fa-car typewriter-cursor"></i> */}
//       </div>
//       <div className="image-grid">
//         {images.map((image, index) => (
//           <div key={index} className="image-card">
//           <img src={image.src} alt={image.alt} className="image" />
//           <div className="description">{image.description}</div>
//         </div>
//         <div className="video-section">
//         <div className="video-text">
//           <h2>Watch Our Latest Video</h2>
//           <p>Add text or description here about the video.</p>
//         </div>
//         <div className="video-container">
//           <video controls>
//             <source src={video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         ))}
//       </div><br></br><br></br>
//       <Footer name='Footer' />
//     </div>
//   );
// };

// export default Home;






















// // import React from 'react';
// // import Footer from '../components/Footer';
// // import FAQ from '../components/FAQ'; // Make sure the import path is correct
// // import '../styles/AboutUs.css';
// // import Typewriter from 'typewriter-effect';
// // import '../App.css'; // Import the main CSS file if needed
// // import '@fortawesome/fontawesome-free/css/all.min.css';

// // const Home = () => {
// //   const images = [
// //     { src: 'swaaba_aralee\src\assets\swaaba3 (2).png', alt: 'Description 1', description: 'This is the first image description' },
// //     { src: 'swaaba_aralee\src\assets\swaaba4.png', alt: 'Description 2', description: 'This is the second image description' },
// //     { src: 'swaaba_aralee\src\assets\swaaba1.png', alt: 'Description 3', description: 'This is the third image description' },
// //   ];
// //   return (
// //     <div className="home-container">
// //        <div className='text'>
// //       <h1>FIND YOUR PERFECT RIDE!</h1>
// //       <Typewriter
// //           options={{
// //             strings: ['Just Keep Moving Forward'],
// //             autoStart: true,
// //             loop: true,
// //           }}
// //         />
// //         <div className="image-grid">
// //         {images.map((image, index) => (
// //           <div key={index} className="image-item">
// //             <img src={image.src} alt={image.alt} />
// //             <p>{image.description}</p>
// //           </div>
// //           ))}
// //       </div>
      
// //       {/* Content of your homepage */}
// //       <Footer name= 'Footer'/> {Footer}
// //     </div>
// //   );
// // };

// // export default Home;
