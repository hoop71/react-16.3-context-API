import React, { Component, Fragment } from 'react';

// NEW CONTEXT
const AppContext = React.createContext();

// PROVIDER COMPONENT
class AppProvider extends Component {
  state = {
    species: 'narwhale',
    name: 'Ned',
    age: 4,
    cool: true,
    lengthofTusk: 10,
    isSubmerged: true
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState(prevState => ({
              age: prevState.age + 1
            })),
          levelUpTusk: () =>
            this.setState(prevState => ({
              lengthofTusk: prevState.lengthofTusk + 1
            }))
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const Ocean = props => (
  <div className="ocean">
    <Animal />
  </div>
);

class Animal extends Component {
  render() {
    return (
      <div>
        <AppContext.Consumer>
          {context => (
            <Fragment>
              <p>My name is {context.state.name}</p>
              <p>I'm a {context.state.species}</p>
              <p>I'm {context.state.age}</p>
              <button onClick={context.growAYearOlder}>Happy Birthday {context.state.name}</button>
              <p>Current Tusk Level: {context.state.lengthofTusk}</p>
              <button onClick={context.levelUpTusk}>Level Up Tusk</button>
            </Fragment>
          )}
        </AppContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <AppProvider>
        <div>
          <p>I'm the the Universe</p>
          <Ocean />
        </div>
      </AppProvider>
    );
  }
}

export default App;
