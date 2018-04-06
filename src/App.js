import React, { Component } from 'react';

const Ocean = props => (
  <div className="family">
    <Animal {...props} />
  </div>
);

class Animal extends Component {
  render() {
    const animals = this.props;
    return (
      <div>
        <ul>
          <p>HI! My name is {animals.name}</p>
          <li>I am a {animals.species}</li>
          <li>I am {animals.age} years old</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  state = {
    species: 'narwhale',
    name: 'Ned',
    age: 80,
    cool: true,
    isSubmerged: true
  };

  render() {
    return (
      <div>
        <p>I'm the app</p>
        <Ocean {...this.state} />
      </div>
    );
  }
}

export default App;
