import React from "react";
import Nav from "../Component/Nav";
import Foteer from "../Component/Foteer";

const backgroundImageStyle = {
  backgroundImage: 'url("https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

export default function Login() {
  return (
    <div style={backgroundImageStyle}>
      <div>
        <Nav />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form
          style={{
            maxWidth: "500px",
            width: "80%",
            padding: "20px",
            border: "2px solid #28a745",
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Add a semi-transparent white background
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ color: 'black' }} // Set the text color to black
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              style={{ color: 'black' }} // Set the text color to black
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
      <Foteer />
    </div>
  );
}
