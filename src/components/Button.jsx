import React from "react";
import { Link } from "react-router-dom";
import './Button.css'

const Button = (props) => {
  return (
    <div>
      <Link to="/contact">
        <div className="mt-4 btn">
          <a href className="contact_btn">
            {props.name}
          </a>
        </div>
      </Link>
      
    </div>
  );
};

export default Button;
