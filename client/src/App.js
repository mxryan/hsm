import React, { Component } from 'react';
import Navbar from "./components/Navbar";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <p>Hello worlds</p>
      </div>
    );
  }
}

export default App;
