import React, { useState } from "react";
import "./login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
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
      <div className="loginContainer">
        <h2 className="loginHeading">Login</h2>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className="loginButton">Login</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
