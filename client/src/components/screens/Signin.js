import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="mycard input-field">
      <div className="card auth-card">
        <h2>Austugram</h2>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button
          className="btn waves-effect waves-light #81d4fa light-blue lighten-3"
          type="submit"
        >
          Sign In
        </button>
        <h5>
          <Link to="/signup">Don't have an account?</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signin;
