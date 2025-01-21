// import React, { useState } from "react";

// const Contact: React.FC = () => {
//   const [name, setName] = useState("");
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [subject, setSubject] = useState("");
//   const [body, setBody] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     setTo("nikadrob@gmail.com");

//     const response = await fetch("https://localhost:7037/api/Email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ to, subject, body }),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       setMessage("Email sent successfully");
//     } else {
//       setMessage("Error sending email 1");
//     }
//   };

//   return (
//     <div>
//       <h1>Send Email</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>From:</label>
//           <input
//             type="email"
//             value={from}
//             onChange={(e) => setFrom(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Subject:</label>
//           <input
//             type="text"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Body:</label>
//           <textarea
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Send</button>
//       </form>
//       <div>{message}</div>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

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
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Your Email:</label>
          <input
            type="email"
            name="from"
            value={formData.from}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </>
  );
};

export default ContactForm;
