import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
      <Header />
      <div>About</div>
      <article>
        <p>
          A web app showing movies categorized by genre and providing info about
          them an giving the opportunity of adding to your wish list
        </p>
        Made By Khaled Taymour
        <br />
        Visit the{" "}
        <a href="https://github.com/KhaledTaymour/the-movies">
          github repo
        </a>{" "}
        for more
      </article>
      <Footer />
    </>
  );
}

export default About;
