import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  // State for username, password, and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setError("");
       setSuccess("Login successful!");
      // Navigate to a protected route or display a success message
    } else {
      setSuccess("");
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container">
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required=""
        />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required=""
        />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
  );
};

export default Login;
