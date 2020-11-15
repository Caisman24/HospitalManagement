import React, { Component } from 'react';
import '../../static/contact.css';

class FirstContainer extends Component {
  render() {
    return (
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
    );
  }
}

export default FirstContainer;
