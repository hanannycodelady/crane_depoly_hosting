import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import InquiryForm from "../components/InquiryForm";
import CreateOrder from "../components/CreateOrder";
import "../components/car.css";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [orderCarId, setOrderCarId] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/v1/cars");
        setCars(response.data.cars || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch cars");
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const toggleInquiryForm = (carId) => {
    if (selectedCarId === carId) {
      setSelectedCarId(null);
    } else {
      setSelectedCarId(carId);
      setOrderCarId(null); 
    }
  };

  const toggleOrderForm = (carId) => {
    if (orderCarId === carId) {
      setOrderCarId(null);
    } else {
      setOrderCarId(carId);
      setSelectedCarId(null);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="car-list">
      {Array.isArray(cars) && cars.map((car) => (
        <div key={car.id} className="car-card">
          <img
            src={car.images[0]?.path || "default-image-path.jpg"}
            alt={`${car.make} ${car.model}`}
            className="car-image"
          />
          <div className="car-details">
            <h3 className="car-title">
              {car.year} {car.make} {car.model}
            </h3>
            <div className="car-price">${car.price}</div>
            <table className="car-specs-table">
              <tbody>
                <tr>
                  <td>Mileage:</td>
                  <td>{car.mileage?.toLocaleString() || "N/A"} miles</td>
                </tr>
                <tr>
                  <td>Year:</td>
                  <td>{car.year}</td>
                </tr>
                <tr>
                  <td>Engine:</td>
                  <td>{car.engine || "N/A"}</td>
                </tr>
                <tr>
                  <td>Steering:</td>
                  <td>{car.steering || "N/A"}</td>
                </tr>
                <tr>
                  <td>Seats:</td>
                  <td>{car.seats || "N/A"}</td>
                </tr>
              </tbody>
            </table>
            <div className="car-actions">
              <button
                className="btn inquiry-btn"
                onClick={() => toggleInquiryForm(car.id)}
              >
                <FaInfoCircle style={{ marginRight: "5px" }} />
                {selectedCarId === car.id ? "Close Inquiry" : "Inquiry"}
              </button>
              <button
                className="btn buy-now-btn"
                onClick={() => toggleOrderForm(car.id)}
              >
                <FaShoppingCart style={{ marginRight: "5px" }} />
                {orderCarId === car.id ? "Close Order" : "Buy Now"}
              </button>
            </div>
          </div>

          {selectedCarId === car.id && (
            <div className="inquiry-form-container">
              <InquiryForm carId={car.id} />
            </div>
          )}

          {orderCarId === car.id && (
            <div className="order-form-container">
              <CreateOrder carId={car.id} onClose={() => setOrderCarId(null)} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CarList;














// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
// import InquiryForm from "../components/InquiryForm";
// import CreateOrder from "../components/CreateOrder";
// import "../components/car.css";

// const CarList = () => {
//   const [cars, setCars] = useState([]); // Initialize as an empty array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedCarId, setSelectedCarId] = useState(null);
//   const [orderCarId, setOrderCarId] = useState(null);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:5000/api/v1/cars");
//         console.log(response.data); // Inspect the API response in the console
//         setCars(response.data.cars || []); // Use a fallback to an empty array
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch cars");
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   const toggleInquiryForm = (carId) => {
//     if (selectedCarId === carId) {
//       setSelectedCarId(null);
//     } else {
//       setSelectedCarId(carId);
//       setOrderCarId(null); 
//     }
//   };

//   const toggleOrderForm = (carId) => {
//     if (orderCarId === carId) {
//       setOrderCarId(null);
//     } else {
//       setOrderCarId(carId);
//       setSelectedCarId(null);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="car-list">
//       {Array.isArray(cars) && cars.map((car) => (
//         <div key={car.id} className="car-card">
//           <img
//             src={car.images[0]?.path || "default-image-path.jpg"}
//             alt={`${car.make} ${car.model}`}
//             className="car-image"
//           />
//           <div className="car-details">
//             <h3 className="car-title">
//               {car.year} {car.make} {car.model}
//             </h3>
//             <div className="car-price">${car.price}</div> {/* Display the price under the title */}
//             <table className="car-specs-table">
//               <tbody>
//                 <tr>
//                   <td>Mileage:</td>
//                   <td>{car.mileage?.toLocaleString() || "N/A"} miles</td>
//                 </tr>
//                 <tr>
//                   <td>Year:</td>
//                   <td>{car.year}</td>
//                 </tr>
//                 <tr>
//                   <td>Engine:</td>
//                   <td>{car.engine || "N/A"}</td>
//                 </tr>
//                 <tr>
//                   <td>Steering:</td>
//                   <td>{car.steering || "N/A"}</td>
//                 </tr>
//                 <tr>
//                   <td>Seats:</td>
//                   <td>{car.seats || "N/A"}</td>
//                 </tr>
//               </tbody>
//             </table>
//             <div className="car-actions">
//               <button
//                 className="btn inquiry-btn"
//                 onClick={() => toggleInquiryForm(car.id)}
//               >
//                 <FaInfoCircle style={{ marginRight: "5px" }} />
//                 {selectedCarId === car.id ? "Close Inquiry" : "Inquiry"}
//               </button>
//               <button
//                 className="btn buy-now-btn"
//                 onClick={() => toggleOrderForm(car.id)}
//               >
//                 <FaShoppingCart style={{ marginRight: "5px" }} />
//                 {orderCarId === car.id ? "Close Order" : "Buy Now"}
//               </button>
//             </div>
//           </div>

//           {selectedCarId === car.id && (
//             <div className="inquiry-form-container">
//               <InquiryForm carId={car.id} />
//             </div>
//           )}

//           {orderCarId === car.id && (
//             <div className="order-form-container">
//               <CreateOrder carId={car.id} onClose={() => setOrderCarId(null)} />
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CarList;

















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
// import InquiryForm from "../components/InquiryForm";
// import CreateOrder from "../components/CreateOrder";
// import "../components/car.css";

// const CarList = () => {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedCarId, setSelectedCarId] = useState(null);
//   const [orderCarId, setOrderCarId] = useState(null);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:5000/api/v1/cars");
//         setCars(response.data.cars);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch cars");
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   const toggleInquiryForm = (carId) => {
//     if (selectedCarId === carId) {
//       setSelectedCarId(null);
//     } else {
//       setSelectedCarId(carId);
//       setOrderCarId(null); 
//     }
//   };

//   const toggleOrderForm = (carId) => {
//     if (orderCarId === carId) {
//       setOrderCarId(null);
//     } else {
//       setOrderCarId(carId);
//       setSelectedCarId(null);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="car-list">
//       {cars.map((car) => (
//         <div key={car.id} className="car-card">
//           <img
//             src={car.images[0]?.path || "default-image-path.jpg"}
//             alt={`${car.make} ${car.model}`}
//             className="car-image"
//           />
//           <div className="car-details">
//             <h3 className="car-title">
//               {car.year} {car.make} {car.model}
//             </h3>
//             <table className="car-specs-table">
//               <tbody>
//                 <tr>
//                   <td>Mileage:</td>
//                   <td>{car.mileage?.toLocaleString() || "N/A"} miles</td>
//                 </tr>
//                 <tr>
//                   <td>Year:</td>
//                   <td>{car.year}</td>
//                 </tr>
//                 <tr>
//                   <td>Engine:</td>
//                   <td>{car.engine || "N/A"}</td>
//                 </tr>
//                 <tr>
//                   <td>Steering:</td>
//                   <td>{car.steering || "N/A"}</td>
//                 </tr>
//                 <tr>
//                   <td>Seats:</td>
//                   <td>{car.seats || "N/A"}</td>
//                 </tr>
//               </tbody>
//             </table>
//             <div className="car-actions">
//               <button
//                 className="btn inquiry-btn"
//                 onClick={() => toggleInquiryForm(car.id)}
//               >
//                 <FaInfoCircle style={{ marginRight: "5px" }} />
//                 {selectedCarId === car.id ? "Close Inquiry" : "Inquiry"}
//               </button>
//               <button
//                 className="btn buy-now-btn"
//                 onClick={() => toggleOrderForm(car.id)}
//               >
//                 <FaShoppingCart style={{ marginRight: "5px" }} />
//                 {orderCarId === car.id ? "Close Order" : "Buy Now"}
//               </button>
//             </div>
//           </div>

//           {selectedCarId === car.id && (
//             <div className="inquiry-form-container">
//               <InquiryForm carId={car.id} />
//             </div>
//           )}

//           {orderCarId === car.id && (
//             <div className="order-form-container">
//               <CreateOrder carId={car.id} onClose={() => setOrderCarId(null)} />
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CarList;











// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
// import InquiryForm from "../components/InquiryForm";
// import CreateOrder from "../components/CreateOrder";
// import "../components/car.css";

// const CarList = () => {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedCarId, setSelectedCarId] = useState(null);
//   const [orderCarId, setOrderCarId] = useState(null);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:5000/api/v1/cars");
//         setCars(response.data.cars);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch cars");
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   const toggleInquiryForm = (carId) => {
//     if (selectedCarId === carId) {
//       setSelectedCarId(null);
//     } else {
//       setSelectedCarId(carId);
//       setOrderCarId(null); 
//     }
//   };

//   const toggleOrderForm = (carId) => {
//     if (orderCarId === carId) {
//       setOrderCarId(null);
//     } else {
//       setOrderCarId(carId);
//       setSelectedCarId(null);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="car-list">
//       {cars.map((car) => (
//         <div key={car.id} className="car-card">
//           <img
//             src={car.images[0]?.path || "default-image-path.jpg"}
//             alt={`${car.make} ${car.model}`}
//             className="car-image"
//           />
//           <div className="car-details">
//             <h3>
//               {car.year} {car.make} {car.model}
//             </h3>
//             <p className="car-price">Price: ${car.price.toLocaleString()}</p>
//           </div>
//           <div className="car-actions">
//             <button
//               className="btn inquiry-btn"
//               onClick={() => toggleInquiryForm(car.id)}
//             >
//               <FaInfoCircle style={{ marginRight: "5px" }} />
//               {selectedCarId === car.id ? "Close Inquiry" : "Inquiry"}
//             </button>
//             <button
//               className="btn buy-now-btn"
//               onClick={() => toggleOrderForm(car.id)}
//             >
//               <FaShoppingCart style={{ marginRight: "5px" }} />
//               {orderCarId === car.id ? "Close Order" : "Buy Now"}
//             </button>
//           </div>

//           {selectedCarId === car.id && (
//             <div className="inquiry-form-container">
//               <InquiryForm carId={car.id} />
//             </div>
//           )}

//           {orderCarId === car.id && (
//             <div className="order-form-container">
//               <CreateOrder carId={car.id} onClose={() => setOrderCarId(null)} />
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CarList;
















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import InquiryForm from "../components/InquiryForm";
// import CreateOrder from "../components/CreateOrder"
// import "../components/car.css";

// const CarList = () => {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedCarId, setSelectedCarId] = useState(null);
//   const [orderCarId, setOrderCarId] = useState(null);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:5000/api/v1/cars");
//         setCars(response.data.cars);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch cars");
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   const toggleInquiryForm = (carId) => {
//     if (selectedCarId === carId) {
//       setSelectedCarId(null);
//     } else {
//       setSelectedCarId(carId);
//       setOrderCarId(null); 
//     }
//   };

//   const toggleOrderForm = (carId) => {
//     if (orderCarId === carId) {
//       setOrderCarId(null);
//     } else {
//       setOrderCarId(carId);
//       setSelectedCarId(null); // Close the inquiry form if open
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="car-list">
//       {cars.map((car) => (
//         <div key={car.id} className="car-card">
//           <div className="car-info">
//             <img
//               src={car.images[0]?.path || "default-image-path.jpg"}
//               alt={`${car.make} ${car.model}`}
//               className="car-image"
//             />
//             <div className="car-details">
//               <h3>
//                 {car.year} {car.make} {car.model}
//               </h3>
//               <p>Price: ${car.price.toLocaleString()}</p>
//             </div>
//           </div>
//           <div className="car-actions">
//             <button
//               className="btn inquiry-btn"
//               onClick={() => toggleInquiryForm(car.id)}
//             >
//               {selectedCarId === car.id ? "Close Inquiry" : "Inquiry"}
//             </button>
//             <button
//               className="btn buy-now-btn"
//               onClick={() => toggleOrderForm(car.id)}
//             >
//               {orderCarId === car.id ? "Close Order" : "Buy Now"}
//             </button>
//           </div>

//           {selectedCarId === car.id && (
//             <div className="inquiry-form-container">
//               <InquiryForm carId={car.id} />
//             </div>
//           )}

//           {orderCarId === car.id && (
//             <div className="order-form-container">
//               <CreateOrder carId={car.id} onClose={() => setOrderCarId(null)} />
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CarList;
