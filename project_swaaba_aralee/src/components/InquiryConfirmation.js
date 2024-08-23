
import React from 'react';
import { useLocation } from 'react-router-dom';

const InquiryConfirmation = () => {
  const location = useLocation();
  const responseMessage = location.state?.responseMessage || "Inquiry submitted successfully!";

  return (
    <div>
      <h1>Thank You!</h1>
      <p>{responseMessage}</p>
      <p>We will get back to you soon.</p>
    </div>
  );
};

export default InquiryConfirmation;
