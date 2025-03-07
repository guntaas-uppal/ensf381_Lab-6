import React from "react";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import EngineeringTopics from "./EngineeringTopics.js";

function App() {
  const currentYear = new Date().getFullYear();
  const isLoggedIn = false; // Change this to true to test the other output

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>

      <p>Current Year: {currentYear}</p>

      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>

      <Home title="Home Page" description="Welcome to our website." />
      <About title="About Us" description="We are passionate about delivering quality experiences." />
      <Contact title="Contact Us" description="Feel free to reach out to us via email or phone." />

      <EngineeringTopics/>
    </div>
  );
}

export default App;
