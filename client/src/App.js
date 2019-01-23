import React, { Component } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import About from "./components/About";
import Contact from "./components/Contact";
import Orderform from "./components/Orderform";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import Heading from "./components/Heading";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <Heading />
        <Navbar />
      
        <Slideshow />

        <Specials />

        <About />

        <Orderform />

        <Testimonials />

        <Contact />

      </div>
</div>
    );
  }
}

export default App;
