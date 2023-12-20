/*import React from "react";*/
import React, { useEffect } from "react";
import Resume from "./Resume";
import Blog from "./Blog";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    console.log("Home component mounted");
    return () => {
      console.log("Home component unmounted");
    };
  }, []);
  return (
    <div>
      <h1>Welcome to My Website!</h1>
      <p>
        Hello, I&aposm Irakli, a passionate Web Developer. Explore my resume and
        blog to learn more about me.
      </p>
      <Resume />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
