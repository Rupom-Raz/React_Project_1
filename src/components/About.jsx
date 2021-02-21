
import React from "react";
import web from "./images/asset 0.jpeg";
import Button from './Button'



const About = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className=" col-md-5 mx-auto  img-fluid about_img">
          <img src={web} alt="" />
        </div>
        <div className="col-md-7 col-10 mx-auto mt-5 about ">
          <h2>About Us</h2>
          <p>UI/UX Designer & Web Developer</p>
          <span className="first_span">
            I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </span>
          <br />
          <br />
          <span className="second_span">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </span>
          <Button name  = "About Me" />
          
        </div>
      </div>
    </div>
  );
};

export default About;
