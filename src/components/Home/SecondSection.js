import React, { Component } from 'react';
import medLab from '../../assets/medLab.svg';
import '../../static/home.css';

class SecondSection extends Component {
  render() {
    return (
      <section className="service-section">
        <div className="grid-item">
          <div className="service-card">
            <img src={medLab} alt="uniqueApp"></img>
            <div className="service-card-content">
              <h1 className="card-header">Unique app</h1>
              <p className="card-text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
            </div>
          </div>

          <div className="service-card">
            <img src={medLab} alt="uniqueApp"></img>
            <div className="service-card-content">
              <h1 className="card-header">Unique app</h1>
              <p className="card-text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
            </div>
          </div>

          <div className="service-card">
            <img src={medLab} alt="uniqueApp"></img>
            <div className="service-card-content">
              <h1 className="card-header">Unique app</h1>
              <p className="card-text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SecondSection;
