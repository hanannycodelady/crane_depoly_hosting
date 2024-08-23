import React, { useState } from 'react';
import TeamMemberPopup from './TeamMemberPopup';
import { FaStar } from 'react-icons/fa';
import '../styles/AboutUs.css';
import team1 from '../assets/Araphat.jpg';
import team2 from '../assets/head.png';
import team3 from '../assets/sale3.jpg';
import team4 from '../assets/mae=rket.jpg';

const testimonialsData = [
  {
    text: "Swaaba Aralee Cars made my car buying experience seamless and enjoyable. Their team was knowledgeable and helpful every step of the way.",
    rating: 5,
    customer: "Mubeezi Jorvan"
  },
  {
    text: "I found the perfect car at a great price, and the customer service was outstanding. Highly recommend Swaab Aralee Cars!",
    rating: 4.5,
    customer: "Philex Kibumba"
  },
  {
    text: "I found the perfect car at a great price, and the customer service was outstanding. Highly recommend Swaab Aralee Cars!",
    rating: 4.5,
    customer: "Wannyana Esther"
  },
];

const teamMembers = [
  {
    image: team1,
    name: 'Kiggundu Araphat',
    role: 'CEO & Founder',
    description: 'John is the visionary behind Swaab Aralee Cars, with a passion for cars and customer satisfaction.',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    image: team2,
    name: 'Kiggundu Shakuru',
    role: 'Chief Operating Officer',
    description: 'Jazira ensures that our operations run smoothly and that our customers receive top-notch service.',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    image: team3,
    name: 'Adongo Simon',
    role: 'Head of Sales',
    description: 'Shifara leads our sales team with a focus on finding the perfect car for every customer.',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    image: team4,
    name: 'Blessed Precious Akuti',
    role: 'Marketing Officer',
    description: 'Kerros leads our sales team with a focus on finding the perfect car for every customer.',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
];

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  return (
    <div className="about-us-container">
      <h1>About Swaaba Aralee</h1>
      
      {/* Mission, Vision, and Our Story Section */}
      <section className="cards-container">
        <div className="card">
          <h2>Our Mission</h2>
          <p>To deliver the best car buying experience by providing a wide range of vehicles, excellent customer service, and a commitment to quality and transparency.</p>
        </div>
        <div className="card">
          <h2>Our Vision</h2>
          <p>To be the most trusted and preferred car dealership, known for innovation, integrity, and customer satisfaction.</p>
        </div>
        <div className="card">
          <h2>Our Story</h2>
          <p>Founded in [2022], Swaab Aralee Cars began with a simple goal: to revolutionize the car buying process. Our founder, Swaab Aralee, saw a need for a dealership that focused not just on selling cars, but on building lasting relationships with customers. From our humble beginnings, we've grown into a trusted name in the industry, thanks to our dedication to quality and customer satisfaction.</p>
        </div>
      </section>

            {/* Meet the Team Section */}
            <section className="meet-the-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member"
              onClick={() => handleMemberClick(member)}
            >
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Testimonials Carousel Section */}
      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial-carousel">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <div className="rating-stars">
                {Array.from({ length: Math.floor(testimonial.rating) }, (_, index) => (
                  <FaStar key={index} className="star-icon" />
                ))}
                {testimonial.rating % 1 !== 0 && <FaStar className="star-icon half" />}
              </div>
              <p>{testimonial.text}</p>
              <p>- {testimonial.customer}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Our Values and Why Choose Us Sections */}
      <div className="values-and-choose">
        <section className="our-values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We believe in honest and transparent dealings with our customers.</li>
            <li><strong>Quality:</strong> We ensure that every vehicle we offer meets our high standards of quality.</li>
            <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. We go above and beyond to meet your needs.</li>
            <li><strong>Innovation:</strong> We continuously seek to improve and innovate in our services and offerings.</li>
          </ul>
        </section>
        
        <section className="why-choose-us">
          <h2>Why Choose Us</h2>
          <ul>
            <li>A wide range of meticulously inspected vehicles</li>
            <li>Exceptional customer service from start to finish</li>
            <li>Competitive pricing and flexible financing options</li>
            <li>Comprehensive warranty and after-sales support</li>
          </ul>
        </section>
      </div>
      

      
      {/* Contact Information Section */}
      <section className="contact-information">
        <h2>Contact Information</h2>
        <p>Email: info@swaaba_aralee.com</p>
        <p>Phone: +256 780 619 890 | +256 705 030 878</p>
        <p>Find Us at Future Holding, Nakawa opposite Spear Motors</p>
      </section>

      {selectedMember && (
        <TeamMemberPopup member={selectedMember} onClose={closePopup} />
      )}
    </div>
  );
};

export default AboutUs;


