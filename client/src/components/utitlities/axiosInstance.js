import axios from "axios";
console.log("Base URL:", import.meta.env.VITE_API_URL);


// import axios from "./axios"; // 👈 jo instance banaya hai

// axios.get("http://localhost:5000/api/v1/users/get-profile")
//   .then(res => console.log("Profile data:", res.data))
//   .catch(err => console.error("API Error:", err));

 const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 10000, // 👈 move timeout here
  headers: {
    'Content-Type': 'application/json',
    // Replace below with actual token dynamically if needed
    // 'Authorization': `Bearer ${yourToken}`
  },
});

export default instance