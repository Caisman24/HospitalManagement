import React, { Component, Fragment } from 'react';
import FirstContainer from '../components/Contact/FirstContainer';
import SecondContainer from '../components/Contact/SecondContainer';

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <FirstContainer></FirstContainer>
        <SecondContainer></SecondContainer>
      </Fragment>
    );
  }
}

export default Contact;
