import React from "react";
import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";
import { MyPost } from "../../interfaces/post";

const About = ({ title }: MyPost) => {
  const linkClickHandler = (path) => {
    Router.push("/");
  };

  return (
    <MainLayout title={"About page"}>
      <h1>{JSON.stringify(title)}</h1>
      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={() => Router.push("/posts")}>Go to posts</button>
    </MainLayout>
  );
};

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`);
  const data = await response.json();

  return {
    title: data.title,
  };
};

export default About;
