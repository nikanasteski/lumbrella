import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Message sent:", data))
      .catch((error) => console.error("Error sending message:", error));
  };

  return (
    <div>
      <Navbar />
      <div className="contactContainer">
        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <input
              className="contactInput"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="contactInput"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="contactButton">Send</button>
          </form>
        </div>
        <div className="contactInfo">
          <h2 className="contactHeading">Reach out here!</h2>
          <p className="contactTitle">E-mail</p>
          <p className="contactP">mail@mail.hr</p>
          <p className="contactTitle">Instagram</p>
          <p className="contactP">@igusername</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
