import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./contact.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    from: "",
    subject: "",
    body: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7037/api/Email", {
        // Update with your backend URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        setFormData({ name: "", from: "", subject: "", body: "" }); // Clear the form
      } else {
        const errorMessage = await response.text();
        alert(`Failed to send email: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="contactContainer">
        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <div>
              <input className="contactInput"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input className="contactInput"
                type="email"
                name="from"
                placeholder="Email"
                value={formData.from}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input className="contactInput"
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <textarea
                name="body"
                placeholder="Message"
                value={formData.body}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="contactButton">Send Message</button>
          </form>
        </div>
        <div className="contactInfo">
          <h2>Reach out here!</h2>
          <p className="contactTitle">E-mail</p>
          <p className="contactP">mail@mail.com</p>
          <p className="contactTitle">Instagram</p>
          <p className="contactP">@igusername</p>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
