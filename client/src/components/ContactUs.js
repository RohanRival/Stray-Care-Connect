import React, { useRef } from "react";
import "./ContactUs.css";
import Navbar from "./Navbar";
import emailjs from 'emailjs-com';

export const ContactUs = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_dww5r5b',
      'template_xtxjwzg', 
      form.current, 
      '-oWfPpEll-Hl4DGjC'
    )
    .then((result) => {
      console.log(result.text);
    }, 
    (error) => {
      console.log(error.text);
    });

    e.target.reset();
  };

  return (
    <div><Navbar />
    
    <div className="contact-us-container">
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <h1>Contact <span>Us</span></h1>
        <div className="form-group">
          <input type="text" name="to_name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <input type="email" name="from_name" placeholder="Your Email" />
        </div>
        
        <div className="form-group">
          <textarea name="message" cols="30" rows="10" placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Send</button>
        <h1>We Will Get Back To You Soon</h1>
      </form>
    </div>
    </div>
    
  );
};

export default ContactUs;
