import React from 'react';
import emailjs from 'emailjs-com';
import './Styles.css'; // Assuming CSS is in a separate file

const SERVICE_ID = "service_478wgmj";
const TEMPLATE_ID = "template_bzhi6zx";
const PUBLIC_KEY = "oxbla0EvffVQA4W9L";

const ContactForm = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully');
            }, (error) => {
                console.log(error.text);
                alert('Something went wrong!');
            });
        e.target.reset();
    };

    return (
        <div className="contact-container">
            <form className="form-container" onSubmit={handleOnSubmit}>
                <h2 className="form-title">Send me a message ✉️</h2>
                <p className="form-subtitle">I'd love to hear from you!</p>

                <div className="form-element">
                    <label htmlFor="from_name">Name</label>
                    <input type="text" id="from_name" name="from_name" placeholder="Your name..." required />
                </div>

                <div className="form-element">
                    <label htmlFor="from_email">E-mail</label>
                    <input type="email" id="from_email" name="from_email" placeholder="Your email..." required />
                </div>

                <div className="form-element">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="5" placeholder="Your message..." required />
                </div>

                <button type="submit" className="form-button">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
