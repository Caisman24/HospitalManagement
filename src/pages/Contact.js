import React, { Fragment } from 'react';
import '../static/contact.css';
import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();
  emailjs
    .sendForm(
      'service_bssxzdh',
      'template_ryxwc9i',
      e.target,
      'user_IVAEMkMhoZXCo93VW59QL'
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

export default function Contact() {
  return (
    <Fragment>
      <section className="contact-hero-section">
        <div className="contact-hero-col">
          <h1>Real talk</h1>
        </div>
        <div className="grid-contact">
          <div className="hero-contact">
            <p>Send us an email</p>
            <a href="mailto:caiussuciu@gmail.com">caiussuciu@gmail.com</a>
          </div>
          <div className="or-contact">
            <div className="waypoint-grid">
              <p>or</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-title">
          <h1>Tell us about your project</h1>
        </div>

        <div className="contact-form-form">
          <form onSubmit={sendEmail}>
            <div className="contact-form-row-text">
              <input
                type="text"
                autoComplete="off"
                placeholder="Your full name"
                required="required"
                name="email"
              />
            </div>

            <div className="contact-form-row-text">
              <input
                type="text"
                autoComplete="off"
                placeholder="Enter your email adress"
                required="required"
                name="email"
              />
            </div>

            <div className="contact-form-row-text">
              <textarea
                autoComplete="off"
                required="required"
                placeholder="Describe your problem"
                name="message"
              ></textarea>
            </div>

            <div className="contact-form-row-text">
              <button type="submit" className="contact-submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
}
