import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCar, FaShapes, FaGasPump, FaCogs, FaClock, FaPalette } from 'react-icons/fa'; 
import '../components/categories.css'; 

const Categories = () => {
  const [makes, setMakes] = useState([]);
  const [bodyTypes, setBodyTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [transmissions, setTransmissions] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    // Fetch all categories on component mount
    const fetchCategories = async () => {
      try {
        const [
          makesResponse,
          bodyTypesResponse,
          fuelTypesResponse,
          transmissionsResponse,
          conditionsResponse,
          colorsResponse,
        ] = await Promise.all([
          axios.get('http://127.0.0.1:5000/api/v1/makes'),
          axios.get('http://127.0.0.1:5000/api/v1/body_types'),
          axios.get('http://127.0.0.1:5000/api/v1/fuel_types'),
          axios.get('http://127.0.0.1:5000/api/v1/transmissions'),
          axios.get('http://127.0.0.1:5000/api/v1/conditions'),
          axios.get('http://127.0.0.1:5000/api/v1/colors'),
        ]);

        setMakes(makesResponse.data);
        setBodyTypes(bodyTypesResponse.data);
        setFuelTypes(fuelTypesResponse.data);
        setTransmissions(transmissionsResponse.data);
        setConditions(conditionsResponse.data);
        setColors(colorsResponse.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="main-content">
      <div className="categories-container">
        <div className="category">
          <label htmlFor="makes">
            <FaCar className="icon" /> Makes:
          </label>
          <select id="makes">
            {makes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>

        <div className="category">
          <label htmlFor="bodyTypes">
            <FaShapes className="icon" /> Body Types:
          </label>
          <select id="bodyTypes">
            {bodyTypes.map((bodyType, index) => (
              <option key={index} value={bodyType}>
                {bodyType}
              </option>
            ))}
          </select>
        </div>

        <div className="category">
          <label htmlFor="fuelTypes">
            <FaGasPump className="icon" /> Fuel Types:
          </label>
          <select id="fuelTypes">
            {fuelTypes.map((fuelType, index) => (
              <option key={index} value={fuelType}>
                {fuelType}
              </option>
            ))}
          </select>
        </div>

        <div className="category">
          <label htmlFor="transmissions">
            <FaCogs className="icon" /> Transmissions:
          </label>
          <select id="transmissions">
            {transmissions.map((transmission, index) => (
              <option key={index} value={transmission}>
                {transmission}
              </option>
            ))}
          </select>
        </div>

        <div className="category">
          <label htmlFor="conditions">
            <FaClock className="icon" /> Conditions:
          </label>
          <select id="conditions">
            {conditions.map((condition, index) => (
              <option key={index} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>

        <div className="category">
          <label htmlFor="colors">
            <FaPalette className="icon" /> Colors:
          </label>
          <select id="colors">
            {colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Categories;




















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaCar, FaShapes, FaGasPump, FaCogs, FaClock, FaPalette } from 'react-icons/fa'; 
// import '../components/categories.css'; 

// const Categories = () => {
//   const [makes, setMakes] = useState([]);
//   const [bodyTypes, setBodyTypes] = useState([]);
//   const [fuelTypes, setFuelTypes] = useState([]);
//   const [transmissions, setTransmissions] = useState([]);
//   const [conditions, setConditions] = useState([]);
//   const [colors, setColors] = useState([]);

//   useEffect(() => {
//     // Fetch all categories on component mount
//     const fetchCategories = async () => {
//       try {
//         const [
//           makesResponse,
//           bodyTypesResponse,
//           fuelTypesResponse,
//           transmissionsResponse,
//           conditionsResponse,
//           colorsResponse,
//         ] = await Promise.all([
//           axios.get('http://127.0.0.1:5000/api/v1/makes'),
//           axios.get('http://127.0.0.1:5000/api/v1/body_types'),
//           axios.get('http://127.0.0.1:5000/api/v1/fuel_types'),
//           axios.get('http://127.0.0.1:5000/api/v1/transmissions'),
//           axios.get('http://127.0.0.1:5000/api/v1/conditions'),
//           axios.get('http://127.0.0.1:5000/api/v1/colors'),
//         ]);

//         setMakes(makesResponse.data);
//         setBodyTypes(bodyTypesResponse.data);
//         setFuelTypes(fuelTypesResponse.data);
//         setTransmissions(transmissionsResponse.data);
//         setConditions(conditionsResponse.data);
//         setColors(colorsResponse.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div className="categories-container">
//       <div className="category">
//         <label htmlFor="makes">
//           <FaCar className="icon" /> Makes:
//         </label>
//         <select id="makes">
//           {makes.map((make, index) => (
//             <option key={index} value={make}>
//               {make}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="category">
//         <label htmlFor="bodyTypes">
//           <FaShapes className="icon" /> Body Types:
//         </label>
//         <select id="bodyTypes">
//           {bodyTypes.map((bodyType, index) => (
//             <option key={index} value={bodyType}>
//               {bodyType}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="category">
//         <label htmlFor="fuelTypes">
//           <FaGasPump className="icon" /> Fuel Types:
//         </label>
//         <select id="fuelTypes">
//           {fuelTypes.map((fuelType, index) => (
//             <option key={index} value={fuelType}>
//               {fuelType}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="category">
//         <label htmlFor="transmissions">
//           <FaCogs className="icon" /> Transmissions:
//         </label>
//         <select id="transmissions">
//           {transmissions.map((transmission, index) => (
//             <option key={index} value={transmission}>
//               {transmission}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="category">
//         <label htmlFor="conditions">
//           <FaClock className="icon" /> Conditions:
//         </label>
//         <select id="conditions">
//           {conditions.map((condition, index) => (
//             <option key={index} value={condition}>
//               {condition}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="category">
//         <label htmlFor="colors">
//           <FaPalette className="icon" /> Colors:
//         </label>
//         <select id="colors">
//           {colors.map((color, index) => (
//             <option key={index} value={color}>
//               {color}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Categories;
