import React from "react";
import Router from "next/router";

const About = () => {
  const linkClickHandler = (path) => {
    Router.push("/");
  };

  return (
    <React.Fragment>
      <h1>About Page</h1>

      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={() => Router.push("/posts")}>Go to posts</button>
    </React.Fragment>
  );
};

export default About;
