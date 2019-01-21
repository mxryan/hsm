import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import About from "./components/About";
import Contact from "./components/Contact";
import Orderform from "./components/Orderform";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";


class App extends Component {
  render() {
    return (
      <div className="App">
         <p>Hello world</p>
        <Navbar />
      
        <Slideshow />

        <Specials />

        <About />

        <Orderform />

        <Testimonials />

        <Contact />

      </div>

    );
  }
}

export default App;
