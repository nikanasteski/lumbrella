import React, { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        // `/api/Login?username=${username}&password=${password}`
        `https://localhost:7037/api/Login?username=${username}&password=${password}`
      );
      if (response.ok) {
        const data = await response.text();
        setMessage("OK");
      } else {
        const errorText = await response.text();
        setMessage("NOK");
      }
    } catch (error) {
      setMessage("An error occurred");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
