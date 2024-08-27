// src/utils/auth.js
export const logout = () => {
    // Clear any authentication tokens or user data
    localStorage.removeItem('authToken'); // or sessionStorage
    // Perform any other logout related tasks here
};
