import React, { Component } from 'react';
class SecondContainer extends Component {
  render() {
    return (
      <section className="contact-form-section">
        <div className="contact-form-title">
          <h1>Tell us about your project</h1>
        </div>

        <div className="contact-form-form">
          <form>
            <div className="contact-form-row-text">
              <input
                type="text"
                autoComplete="off"
                placeholder="Your full name"
                required="required"
              />
            </div>

            <div className="contact-form-row-text">
              <input
                type="text"
                autoComplete="off"
                placeholder="Enter your email adress"
                required="required"
              />
            </div>

            <div className="contact-form-row-text">
              <textarea
                autoComplete="off"
                required="required"
                placeholder="Describe your problem"
              ></textarea>
            </div>

            <div className="contact-form-row-text">
              <label for="gdpr">
                <input
                  autoComplete="off"
                  type="checkbox"
                  required="required"
                  id="gdpr"
                />
                <p>I Have read and accepted the Privacy Policy</p>
                <p>
                  (Your information is not stored on our website. Your message
                  is emailed directly to us)
                </p>
              </label>
            </div>

            <div className="contact-form-row-text">
              <button type="submit" className="contact-submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default SecondContainer;
