import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <form className="form-group mb-5">
            <div className="mb-3">
              <h2 className = "text-center my-2">Contact With Us</h2>
              <label>Name</label>
              <input type="text" className="form-control" />

              <label className="form-label">Email address</label>

              <input type="email" className="form-control" />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Check me out</label>
            </div>
            <Button name="Send me" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
