import React, { useState, useEffect } from 'react';
import Autoshowcase from '../pages/Autoshowcase';
import axios from 'axios';

const CarShowcase = () => {
  const [carImages, setCarImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCarImages();
  }, []);

  const fetchCarImages = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/v1/car_images');
      console.log(response.data.car_images); 
      setCarImages(response.data.car_images);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching car images:', error);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <Autoshowcase carImages={carImages} />;
};

export default CarShowcase;
