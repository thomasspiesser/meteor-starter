import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class Index extends React.Component {
  render() {
    return (
      <Jumbotron className="text-center">
        <h2>Starter kit</h2>
        <p>An opinionated starter kit for Meteor applications.</p>
        <p>Includes react, bootstrap and flow-router.</p>
      </Jumbotron>
    );
  }
}

export default Index;
