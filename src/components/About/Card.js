import React, { Component, Fragment } from 'react';
import '../../static/about.css';

class Card extends Component {
  render() {
    return (
      <div className="card-view">
        <div className="card-title">
          <h1>Muita</h1>
        </div>

        <div className="card-date">
          <h1>04 May 2004</h1>
        </div>

        <div className="card-cancel">
          <h1>Cancel</h1>
        </div>
      </div>
    );
  }
}

export default Card;
