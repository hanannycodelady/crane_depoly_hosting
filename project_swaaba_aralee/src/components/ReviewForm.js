// src/components/ReviewForm.js
import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [userId, setUserId] = useState('');
  const [carId, setCarId] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ userId, carId, rating, comment });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
        required
      />
      <input
        type="number"
        value={carId}
        onChange={(e) => setCarId(e.target.value)}
        placeholder="Car ID"
        required
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating"
        required
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Comment"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
