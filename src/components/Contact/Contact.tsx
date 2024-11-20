import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa6';
import './Contact.css';

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="contact-heading">Get In Touch</h2>
          <p className="contact-description">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className="contact-details1">
            <AiOutlineMail size={30} /> asimhussain787@gmail.com
          </div>
          <div className="contact-details2">
            <FaPhone size={30} /> (+92)-3002722662
          </div>
        </div>

        <div className="contact-form">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-input" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="form-input" />
          </div>
          <div className="form-field">
            <label htmlFor="msg">Message</label>
            <textarea id="msg" className="form-textarea" rows={12}></textarea>
          </div>
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;