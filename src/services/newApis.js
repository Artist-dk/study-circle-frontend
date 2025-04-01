import axios from "axios";

import Data from "./newApis.json";  // Adjust the path as needed


console.log("User APIs Data:", Data); // Log the user APIs data
// const URL = process.env.URL;
const URL = `http://localhost:8081`;


export const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Ensures cookies are sent/received for authentication
};

export const registerUser = async () => {
  try {

    const response = await axios.post(`${URL}/user/register`, Data.registerUser, axiosConfig);
    console.log("User registered successfully:", response.data);
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response ? error.response.data : error.message
    );
  }
};

export const loginUser = async () => {
  try {
    const response = await axios.post(`${URL}/user/login`, Data.loginUser, axiosConfig);
  } catch (error) {
    console.error("Error logging in user:", error.response ? error.response.data : error.message);
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(`${URL}/user/logout`, {}, {
      withCredentials: true, // Ensure cookies are included for session removal
    }
    );
    console.log("User logged out successfully:", response.data);
  } catch (error) {
    console.error("Error logging out user:", error.response ? error.response.data : error.message);
  }
};



// export const createAccount = async (accountData) => {
//   try {
//     const response = await axios.post(`${URL}/user/create`,accountData,axiosConfig);
//     console.log("Account created successfully:", response.data);
//   } catch (error) {
//     console.error("Error creating account:",error.response ? error.response.data : error.message);
//   }
// };

// export const authenticateJWT = async (token) => {
//   try {
//     const response = await axios.get(`${URL}/user/authenticate`, {
//       headers: { ...axiosConfig.headers, Authorization: `Bearer ${token}` },
//       withCredentials: true,
//     });
//     console.log("JWT Authentication successful:", response.data);
//   } catch (error) {
//     console.error("JWT Authentication failed:",error.response ? error.response.data : error.message);
//   }
// };

export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${URL}/courses`, axiosConfig);
    return response.data.courses
  } catch (error) {
    console.error("Error fetching courses:", error.response ? error.response.data : error.message);
  }
};
fetchCourses();

export const fetchCourseById = async (id) => {
  try {
    const response = await axios.get(`${URL}/courses/${id}`, axiosConfig);
    console.log(`Course ${id} details:`, response.data);
  } catch (error) {
    console.error("Error fetching course by ID:", error.response ? error.response.data : error.message);
  }
};

export const createCourse = async (createCourseData) => {
  try {
    const response = await axios.post(`${URL}/courses`, createCourseData, axiosConfig);
    console.log("Course created successfully:", response.data);
  } catch (error) {
    console.error("Error creating course:", error.response ? error.response.data : error.message);
  }
};
// createCourse();

export const updateCourse = async (id, updatedData) => {
  try {
    const response = await axios.put(`${URL}/courses/${id}`, updatedData, axiosConfig);
    console.log(`Course ${id} updated successfully:`, response.data);
  } catch (error) {
    console.error("Error updating course:", error.response ? error.response.data : error.message);
  }
};

// updateCourse("12345", { title: "Updated JavaScript Course", price: 249 });

export const deleteCourse = async (id) => {
  try {
    const response = await axios.delete(`${URL}/courses/${id}`, axiosConfig);
    console.log(`Course ${id} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting course:", error.response ? error.response.data : error.message);
  }
};

export const fetchUserEnrollments = async (userId) => {
  try {
    const response = await axios.get(`${URL}/enroll/${userId}`, axiosConfig);
    console.log(`Enrollments for user ${userId}:`, response.data);
  } catch (error) {
    console.error("Error fetching enrollments:", error.response ? error.response.data : error.message);
  }
};

export const enrollUser = async (enrollmentData) => {
  try {
    const response = await axios.post(`${URL}/enroll`, enrollmentData, axiosConfig);
    console.log("User enrolled successfully:", response.data);
  } catch (error) {
    console.error("Error enrolling user:", error.response ? error.response.data : error.message);
  }
};

export const trackLessonProgress = async (lessonId, progressData) => {
  try {
    const response = await axios.post(`${URL}/progress/${lessonId}`, progressData, axiosConfig);
    console.log(`Progress tracked for lesson ${lessonId}:`, response.data);
  } catch (error) {
    console.error("Error tracking progress:", error.response ? error.response.data : error.message);
  }
};

export const getCourseProgress = async (courseId) => {
  try {
    const response = await axios.get(`${URL}/progress/${courseId}`, axiosConfig);
    console.log(`Progress for course ${courseId}:`, response.data);
  } catch (error) {
    console.error("Error fetching course progress:", error.response ? error.response.data : error.message);
  }
};

export const fetchAllTests = async () => {
  try {
    const response = await axios.get(`${URL}/test`, axiosConfig);
    console.log("All tests fetched:", response.data);
  } catch (error) {
    console.error("Error fetching tests:", error.response ? error.response.data : error.message);
  }
};

export const fetchTestById = async (id) => {
  try {
    const response = await axios.get(`${URL}/test/${id}`, axiosConfig);
    console.log(`Test ${id} details:`, response.data);
  } catch (error) {
    console.error("Error fetching test by ID:", error.response ? error.response.data : error.message);
  }
};

export const createTest = async (testData) => {
  try {
    const response = await axios.post(`${URL}/test`, testData, axiosConfig);
    console.log("Test created successfully:", response.data);
  } catch (error) {
    console.error("Error creating test:", error.response ? error.response.data : error.message);
  }
};

export const updateTest = async (id, testData) => {
  try {
    const response = await axios.put(
      `${URL}/test/${id}`,
      testData,
      axiosConfig
    );
    console.log(`Test ${id} updated successfully:`, response.data);
  } catch (error) {
    console.error("Error updating test:", error.response ? error.response.data : error.message);
  }
};

export const deleteTest = async (id) => {
  try {
    const response = await axios.delete(`${URL}/test/${id}`, axiosConfig);
    console.log(`Test ${id} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting test:", error.response ? error.response.data : error.message);
  }
};

export const sendMessage = async (messageData) => {
  try {
    const response = await axios.post(`${URL}/contact`, messageData, axiosConfig);
    console.log("Message sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending message:", error.response ? error.response.data : error.message);
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.post(`${URL}/fetchUsers`, {}, axiosConfig);
    console.log("Users fetched:", response.data);
  } catch (error) {
    console.error("Error fetching users:", error.response ? error.response.data : error.message);
  }
};

export const fetchUser = async (userData) => {
  try {
    const response = await axios.post(`${URL}/fetchUser`, userData, axiosConfig);
    console.log("User data fetched:", response.data);
  } catch (error) {
    console.error("Error fetching user data:", error.response ? error.response.data : error.message);
  }
};

export const fetchMessages = async () => {
  try {
    const response = await axios.get(`${URL}/fetchMessages`, axiosConfig);
    console.log("Messages fetched:", response.data);
  } catch (error) {
    console.error("Error fetching messages:", error.response ? error.response.data : error.message);
  }
};

export const saveMessage = async (messageData) => {
  try {
    const response = await axios.post(`${URL}/saveMessage`, messageData, axiosConfig);
    console.log("Message saved successfully:", response.data);
  } catch (error) {
    console.error("Error saving message:", error.response ? error.response.data : error.message);
  }
};

export const getRecipientId = async () => {
  try {
    const response = await axios.get(`${URL}/getRecipientId`, axiosConfig);
    console.log("Recipient ID fetched:", response.data);
  } catch (error) {
    console.error("Error fetching recipient ID:", error.response ? error.response.data : error.message);
  }
};

export const getRecipientDetails = async () => {
  try {
    const response = await axios.get(`${URL}/recipientDetails`, axiosConfig);
    console.log("Recipient details fetched:", response.data);
  } catch (error) {
    console.error("Error fetching recipient details:", error.response ? error.response.data : error.message);
  }
};

// // Account Management
// export const createAccount = (accountData) =>
//   axios.post("/user/create", accountData);
// export const authenticateJWT = (token) =>
//   axios.get("/user/authenticate", {
//     headers: { Authorization: `Bearer ${token}` },
//   });

// // Courses
// export const fetchCourses = () => axios.get(`${URL}/courses`);
// export const fetchCourseById = (id) => axios.get(`${URL}/courses/${id}`);
// export const createCourse = (courseData) =>
//   axios.post(`${URL}/courses`, courseData);
// export const updateCourse = (id, updatedData) =>
//   axios.put(`${URL}/courses/${id}`, updatedData);
// export const deleteCourse = (id) => axios.delete(`${URL}/courses/${id}`);

// // Enrollments
// export const fetchUserEnrollments = (userId) =>
//   axios.get(`${URL}/enroll/${userId}`);
// export const enrollUser = (enrollmentData) =>
//   axios.post(`${URL}/enroll`, enrollmentData);

// // Progress Tracking
// export const trackLessonProgress = (lessonId, progressData) =>
//   axios.post(`/progress/${lessonId}`, progressData);
// export const getCourseProgress = (courseId) =>
//   axios.get(`/progress/${courseId}`);

// // Tests
// export const fetchAllTests = () => axios.get("/test");
// export const fetchTestById = (id) => axios.get(`/test/${id}`);
// export const createTest = (testData) => axios.post("/test", testData);
// export const updateTest = (id, testData) => axios.put(`/test/${id}`, testData);
// export const deleteTest = (id) => axios.delete(`/test/${id}`);

// // Contact Us
// export const sendMessage = (messageData) => axios.post("/", messageData);

// // Messages
// export const fetchUsers = () => axios.post("/fetchUsers");
// export const fetchUser = (userData) => axios.post("/fetchUser", userData);
// export const fetchMessages = () => axios.get("/fetchMessages");
// export const saveMessage = (messageData) =>
//   axios.post("/saveMessage", messageData);
// export const getRecipientId = () => axios.get("/getRecipientId");
// export const getRecipientDetails = () => axios.get("/recipientDetails");
