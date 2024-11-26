import axios from "axios";

const API_URL = "https://vrv-server-9.onrender.com/users";

// Fetch all users
export const fetchUsers = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// Add a new user
export const addUser = async (user) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

// Update an existing user
export const updateUser = async (id, user) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

// Delete a user
export const deleteUser = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};




// Export the getUsers function
export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;  // return the list of users
};

// Add other API functions if needed (addUser, updateUser, etc.)