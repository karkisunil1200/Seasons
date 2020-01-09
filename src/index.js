import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      lat: null,
      errMessage: ''
    };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude});
      },
      err => {
        this.setState({errMessage: err.message});
      }
    );
  }
  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <h1>Loading....</h1>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
