// import React, { useState } from "react";
// import "../components/car.css";

// const InquiryForm = ({ carId }) => {
//   const [formData, setFormData] = useState({
//     car_id: carId || "",
//     name: "",
//     email: "",
//     telephone: "",
//     message: "",
//   });

//   const [responseMessage, setResponseMessage] = useState("");
//   const [isSuccess, setIsSuccess] = useState(false);

//   // Handle form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setResponseMessage("");

//     try {
//       // Retrieve the token from localStorage
//       const token = localStorage.getItem("token");
//       console.log("Retrieved token:", token);

//       if (!token) {
//         setResponseMessage("Authorization token is missing. Please log in.");
//         setIsSuccess(false);
//         return;
//       }

//       // Log the form data for debugging
//       console.log("Form data being sent:", formData);

//       // Send POST request to the API using Fetch
//       const response = await fetch("http://127.0.0.1:5000/api/v1/inquiries/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       console.log("Response status:", response.status);

//       if (response.ok) {
//         const data = await response.json();

//         // Log the server response
//         console.log("Response from server:", data);

//         // Set the response message for successful submission
//         setResponseMessage(data.message);
//         setIsSuccess(true);

//         // Clear the form data after successful submission
//         setFormData({
//           car_id: carId || "",
//           name: "",
//           email: "",
//           telephone: "",
//           message: "",
//         });
//       } else {
//         const errorData = await response.json();
//         console.error("Response not ok:", errorData);
//         setResponseMessage(`Inquiry failed: ${errorData.error || 'Unknown error'}`);
//         setIsSuccess(false);
//       }
//     } catch (error) {
//       console.error("Error response:", error);
//       setResponseMessage('Inquiry failed: Network error');
//       setIsSuccess(false);
//     }
//   };

//   return (
//     <div className="inquiry-form">
//       <form onSubmit={handleSubmit}>
//         {responseMessage && (
//           <p className={`response-message ${isSuccess ? "success" : "error"}`}>
//             {responseMessage}
//           </p>
//         )}
//         <h2>Submit Inquiry</h2>
//         <input
//           type="text"
//           name="car_id"
//           placeholder="Car ID"
//           value={formData.car_id}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="telephone"
//           placeholder="Telephone"
//           value={formData.telephone}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Submit Inquiry</button>
//       </form>
//     </div>
//   );
// };

// export default InquiryForm;





import React, { useState } from "react";
import "../components/car.css";

const InquiryForm = ({ carId }) => {
  const [formData, setFormData] = useState({
    car_id: carId || "",
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setResponseMessage("");

    // Check if all fields are filled before submission
    const { car_id, name, email, telephone, message } = formData;
    if (!car_id || !name || !email || !telephone || !message) {
      setResponseMessage("All fields are required.");
      setIsSuccess(false);
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setResponseMessage("Authorization token is missing. Please log in.");
        setIsSuccess(false);
        return;
      }

      const response = await fetch(
        "http://127.0.0.1:5000/api/v1/inquiries/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData), // Send formData as JSON
        }
      );

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        setIsSuccess(true);

        setFormData({
          car_id: carId || "",
          name: "",
          email: "",
          telephone: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setResponseMessage(`Inquiry failed: ${errorData.error || 'Unknown error'}`);
        setIsSuccess(false);
      }
    } catch (error) {
      setResponseMessage("Inquiry failed: Network error");
      setIsSuccess(false);
    }
  };

  return (
    <div className="inquiry-form">
      <form onSubmit={handleSubmit}>
        {responseMessage && (
          <p className={`response-message ${isSuccess ? "success" : "error"}`}>
            {responseMessage}
          </p>
        )}
        <h2>Submit Inquiry</h2>
        <input
          type="text"
          name="car_id"
          placeholder="Car ID"
          value={formData.car_id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="telephone"
          placeholder="Telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
};

export default InquiryForm;











// import React, { useState } from "react";
// import "../components/car.css";

// const InquiryForm = ({ carId }) => {
//   const [formData, setFormData] = useState({
//     car_id: carId || "",
//     name: "",
//     email: "",
//     telephone: "",
//     message: "",
//   });

//   const [responseMessage, setResponseMessage] = useState("");
//   const [isSuccess, setIsSuccess] = useState(false);

//   // Handle form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setResponseMessage("");

//     // Check if all fields are filled before submission
//     const { car_id, name, email, telephone, message } = formData;
//     if (!car_id || !name || !email || !telephone || !message) {
//       setResponseMessage("All fields are required.");
//       setIsSuccess(false);
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         setResponseMessage("Authorization token is missing. Please log in.");
//         setIsSuccess(false);
//         return;
//       }

//       const response = await fetch(
//         "http://127.0.0.1:5000/api/v1/inquiries/create",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           }
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         setResponseMessage(data.message);
//         setIsSuccess(true);

//         setFormData({
//           car_id: carId || "",
//           name: "",
//           email: "",
//           telephone: "",
//           message: "",
//         });
//       } else {
//         const errorData = await response.json();
//         setResponseMessage(`Inquiry failed: ${errorData.error || 'Unknown error'}`);
//         setIsSuccess(false);
//       }
//     } catch (error) {
//       setResponseMessage("Inquiry failed: Network error");
//       setIsSuccess(false);
//     }
//   };

//   return (
//     <div className="inquiry-form">
//       <form onSubmit={handleSubmit}>
//         {responseMessage && (
//           <p className={`response-message ${isSuccess ? "success" : "error"}`}>
//             {responseMessage}
//           </p>
//         )}
//         <h2>Submit Inquiry</h2>
//         <input
//           type="text"
//           name="car_id"
//           placeholder="Car ID"
//           value={formData.car_id}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="telephone"
//           placeholder="Telephone"
//           value={formData.telephone}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Submit Inquiry</button>
//       </form>
//     </div>
//   );
// };

// export default InquiryForm;

