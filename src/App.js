import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./component/about/About";
import Developer from "./component/Developer/Developer";
import Subscribe from "./component/Developer/Subscribe/Subscribe";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Developer />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
