import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add API call to submit email and password here
  };
  
  return (
    <div>
      <div className="loginContainer">
        <h2 className="loginHeading">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="loginButton">Log in</button>
        </form>
      </div>
    </div>
  );
}