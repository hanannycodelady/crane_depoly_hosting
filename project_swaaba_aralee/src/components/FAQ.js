import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prevOpenIndexes) =>
      prevOpenIndexes.includes(index)
        ? prevOpenIndexes.filter((i) => i !== index)
        : [...prevOpenIndexes, index]
    );
  };

  const faqs = [
    {
      question: 'What are your business hours?',
      answer: 'Our business hours are from Monday to Friday, 8 AM to 5 PM.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support team at info@swaaba_aralee.com or call us at +256 785 220 954.',
    },
    {
      question: 'Do you offer warranties on your cars?',
      answer: 'Yes, we offer a variety of warranty options for our cars. You can learn more about our warranty plans on the car’s listing page or by speaking with one of our representatives.',
    },
    {
      question: 'How do I create an account?',
      answer: 'Click on the "Sign Up" button at the top of the homepage and fill out the registration form with your details. You will receive a confirmation email to activate your account.',
    },
  ];

  return (
    <section className="faq">
      <h2>FAQ</h2>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <h5 onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className={`arrow ${openIndexes.includes(index) ? 'expanded' : ''}`}>➤</span>
          </h5>
          {openIndexes.includes(index) && <p>{faq.answer}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
















// import React, { useState } from 'react';
// // import React, { useState } from 'react';
// import '../styles/FAQ.css';

// const FAQ = () => {
//   const [openIndexes, setOpenIndexes] = useState([]);

//   const toggleFAQ = (index) => {
//     setOpenIndexes((prevOpenIndexes) =>
//       prevOpenIndexes.includes(index)
//         ? prevOpenIndexes.filter((i) => i !== index)
//         : [...prevOpenIndexes, index]
//     );
//   };

//   const faqs = [
//     {
//       question: 'What are your business hours?',
//       answer: 'Our business hours are from Monday to Friday, 8 AM to 5 PM.',
//     },
//     {
//       question: 'How can I contact customer support?',
//       answer: 'You can contact our customer support team at info@swaaba_aralee.com or call us at +256 785 220 954.',
//     },
//     {
//       question: 'Do you offer warranties on your cars?',
//       answer: 'Yes, we offer a variety of warranty options for our cars. You can learn more about our warranty plans on the car’s listing page or by speaking with one of our representatives.',
//     },
//     {
//       question: 'How do I create an account?',
//       answer: 'Click on the "Sign Up" button at the top of the homepage and fill out the registration form with your details. You will receive a confirmation email to activate your account.',
//     },
//   ];

//   return (
//     <section className="faq">
//       <h2>FAQ</h2>
//       {faqs.map((faq, index) => (
//         <div className="faq-item" key={index}>
//           <h5 onClick={() => toggleFAQ(index)}>{faq.question}</h5>
//           {openIndexes.includes(index) && <p>{faq.answer}</p>}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default FAQ;













// // import React from 'react';

// // const FAQ = () => {
// //   return (
// //     <section className="faq">
// //       <h2>FAQ</h2>
// //       <div className="faq-item">
// //         <h5>What are your business hours?</h5>
// //         <p4>Our business hours are from Monday to Friday, 8 AM to 5 PM.</p4>
// //       </div>
// //       <div className="faq-item">
// //         <h5>How can I contact customer support?</h5>
// //         <p4>You can contact our customer support team at info@swaaba_aralee.com or call us at +256 785 220 954.</p4>
// //       </div>
// //       <div className="faq-item">
// //         <h5>Do you offer warranties on your cars?</h5>
// //         <p4>Yes, we offer a variety of warranty options for our cars. You can learn more about our warranty plans on the car’s listing page or by speaking with one of our representatives.</p4>
// //       </div>
// //       <div className="faq-item">
// //         <h5>How do I create an account?</h5>
// //         <p4>Click on the "Sign Up" button at the top of the homepage and fill out the registration form with your details. You will receive a confirmation email to activate your account.</p4>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FAQ;
