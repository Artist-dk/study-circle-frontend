import React, { useState } from "react";


import "./ApiResponsePopup.css";

const BASE_URL = "http://localhost:8081"; // backend base URL

export default function ApiTester() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const showResponse = (res) => {
    setApiResponse(res);
    setPopupOpen(true);
  };

  const [registerData, setRegisterData] = useState({
    firstName: "Test",
    lastName: "User",
    userName: "testuser",
    email: "testuser@gmail.com",
    password: "test123",
    confirmPassword: "test123",
    phoneNo: "9999999999",
    description: "NA",
  });

  const [loginData, setLoginData] = useState({
    username: "testuser",
    password: "test123",
  });

  const register = async () => {
    try {
      const res = await fetch(`${BASE_URL}/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(registerData),
      });

      const data = await res.json();
      showResponse(data);
    } catch (err) {
      showResponse({ error: err.message });
    }
  };

  const login = async () => {
    try {
      const res = await fetch(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(loginData),
      });

      const data = await res.json();
      showResponse(data);
    } catch (err) {
      showResponse({ error: err.message });
    }
  };

  const logout = async () => {
    try {
      const res = await fetch(`${BASE_URL}/user/logout`, {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();
      showResponse(data);
    } catch (err) {
      showResponse({ error: err.message });
    }
  };

  const getProfile = async () => {
    try {
      const res = await fetch(`${BASE_URL}/user/profile`, {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();
      showResponse(data);
    } catch (err) {
      showResponse({ error: err.message });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🧪 API Tester</h2>

      <button onClick={register}>Register</button>
      <br /><br />

      <button onClick={login}>Login</button>
      <br /><br />

      <button onClick={getProfile}>Get Profile (Protected)</button>
      <br /><br />

      <button onClick={logout}>Logout</button>

      {/* ===== POPUP ===== */}
        {popupOpen && (
        <div className="api-popup-overlay">
            <div className="api-popup">
            <h3 className="api-popup-title">API Response</h3>

            <pre className="api-popup-body">
                {JSON.stringify(apiResponse, null, 2)}
            </pre>

            <button
                className="api-popup-close-btn"
                onClick={() => setPopupOpen(false)}
            >
                Close
            </button>
            </div>
        </div>
        )}
    </div>
  );
}

// /* ---------- inline styles ---------- */

// const overlayStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   background: "rgba(0,0,0,0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: 9999,
// };

// const popupStyle = {
//   background: "black",
//   border: "solid lime 1px",
//   color: "lime",
//   padding: 20,
//   width: 450,
//   borderRadius: 8,
//   boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
// };

// const preStyle = {
//   background: "grey",
//   padding: 10,
//   maxHeight: 300,
//   overflowY: "auto",
//   fontSize: 13,
// };



// import React, { useState } from "react";

// const BASE_URL = "http://localhost:8081"; // backend base URL

// export default function ApiTester() {
    
//   const [popupOpen, setPopupOpen] = useState(false);
//   const [apiResponse, setApiResponse] = useState(null);

  
//   const showResponse = (res) => {
//     setApiResponse(res);
//     setPopupOpen(true);
//   };

  
//   const [registerData, setRegisterData] = useState({
//     firstName: "Test",
//     lastName: "User",
//     userName: "testuser",
//     email: "testuser@gmail.com",
//     password: "test123",
//     confirmPassword: "test123",
//     phoneNo: "9999999999",
//     description: "NA"
//   });

//   const [loginData, setLoginData] = useState({
//     username: "testuser",
//     password: "test123",
//   });

//   const register = async () => {
//     const res = await fetch(`${BASE_URL}/user/register`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify(registerData),
//     });

//     const data = await res.json();
//     console.log("REGISTER RESPONSE:", data);
//     showResponse(data);
//   };

//     //     showResponse(res);
//     // } catch (err) {
//     //   showResponse({ error: err.message });

//   const login = async () => {
//     const res = await fetch(`${BASE_URL}/user/login`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify(loginData),
//     });

//     const data = await res.json();
//     console.log("LOGIN RESPONSE:", data);
//   };

//   const logout = async () => {
//     const res = await fetch(`${BASE_URL}/user/logout`, {
//       method: "GET",
//       credentials: "include", 
//     });

//     const data = await res.json();
//     console.log("LOGOUT RESPONSE:", data);
//   };

//   const getProfile = async () => {
//     const res = await fetch(`${BASE_URL}/user/profile`, {
//       method: "GET",
//       credentials: "include", // cookie sent automatically
//     });

//     const data = await res.json();
//     console.log("PROFILE RESPONSE:", data);
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>🧪 API Tester</h2>

//       <button onClick={register}>Register</button>
//       <br /><br />

//       <button onClick={login}>Login</button>
//       <br /><br />

//       <button onClick={getProfile}>Get Profile (Protected)</button>
//       <br /><br />

//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// }
