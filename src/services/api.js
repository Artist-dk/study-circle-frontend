
import axios from "axios";

const apiEnv = {
  url: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
    // 'Content-Type': 'multipart/form-data'
  },
  credentials: "include",
};

const { headers, credentials } = apiEnv;

function handleResponse(response) {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.text();
}

function handleError(error) {
  console.error("Error:", error);
}

function makeRequest(endpoint, method, data) {
  let url = `${apiEnv.url}/${endpoint}`;
  if (method === 'GET' && data) {
    const queryParams = new URLSearchParams(data);
    url += `?${queryParams.toString()}`;
  }
  return fetch(url, {
    method,
    headers,
    credentials,
    body: (method !== 'GET') ? JSON.stringify(data) : undefined,
  })
  .then((response) => {
    console.log("Response:", response); // Log the entire response object
    return handleResponse(response);
  })
  .then((data) => {
    console.log("Response data:", data); // Log the parsed data
    return data;
  })
  .catch(handleError);
}


const Api = {
  createNewAccount(formData) {
    console.log(formData)
    return makeRequest("account/createnew", "POST", formData).then((data) => {
      console.log("Form data submitted:", data);
    });
  },

  logout() {
    return makeRequest("logout", "GET").then((data) => {
      console.log("Logout successful:", data);
      return true;
    });
  },

  login(formData) {
    // console.log(formData)
    return makeRequest("login", "POST", formData)
    .then((data) => {
      console.log("Login successful:", data);
      return data; 
    });
  },

  addNewBook(dt) {
    console.log(dt)
    axios.post('http://localhost:8081/library/add-new-book', dt)
    .then(response => {
        console.log('Form submitted successfully:', response.data);
    })
    .catch(error => {
        console.error('Error submitting form:', error);
    });
  },

  async downloadFile(filename) {
    try {
      const response = await fetch(`uploads/${filename}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Failed to download file');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error('Error downloading file:', error);
      throw error;
    }
  },
  async fetchBridgeUsers() {
  try {
    const response = await fetch(`${apiEnv.url}/user/profile`);
    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
},
async fetchTutorial(id) {
  // fetch('http://localhost:8081/tutorial/64bb76e5372fc9124ba6021baf604a7e')
  fetch(`http://localhost:8081/tutorial/${id}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(response)
    return response.text(); 
  })
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

};


export default Api;


