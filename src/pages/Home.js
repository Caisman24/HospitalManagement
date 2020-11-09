import React, { Component, Fragment } from 'react';
import FirstContainer from '../components/Home/FirstContainer';
import SecondSection from '../components/Home/SecondSection';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <FirstContainer></FirstContainer>
        <SecondSection></SecondSection>
      </Fragment>
    );
  }
}

export default Home;
