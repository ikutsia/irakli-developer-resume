/*
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_email_service_id",
        "your_template_id",
        form.current,
        "your_user_id"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="from_name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="from_email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows={5} required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
*/

import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim
        justo vel semper ultricies. Vivamus et velit vel augue vehicula euismod.
        Integer non ex vitae dolor dignissim fermentum in ac massa.
      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default Contact;
