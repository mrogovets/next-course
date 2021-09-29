import React from "react";
import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

const About = () => {
  const linkClickHandler = (path) => {
    Router.push("/");
  };

  return (
    <MainLayout title={"About page"}>
      <h1>About Page</h1>
      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={() => Router.push("/posts")}>Go to posts</button>
    </MainLayout>
  );
};

export default About;
