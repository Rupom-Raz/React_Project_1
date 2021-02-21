import React from "react";
import Button from "./Button";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <section id="header" className="">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto header ">
              <h1>Hi! I'm Kalvin.</h1>
              <span className="hero_text  ">
                Creative Designer Developer located in New York. Specialized in
                Creating Websites.
              </span>
              <br />
              <Button name="Contact Me" />
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="row">
            <About />
          </div>
        </div>
      </section>

      <section id="service ">
        <div className="container-fluid my-5">
          <div className="row">
            <Service />
          </div>
        </div>
      </section>

      <section id = "contact">
        <div className="container-fluid">
          <div className="row">
            <Contact />
          </div>
        </div>

      </section>



    </div>
  );
};

export default Home;
