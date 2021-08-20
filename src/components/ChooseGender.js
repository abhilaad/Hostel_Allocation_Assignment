import React from "react";
import girl from "./girl.png";
import boy from "./boy.png";

import { Link } from "react-router-dom";

export default function ChooseGender() {
  return (
    <div className="card-header">
      <h1>Choose your Hostel</h1>
      <div className="card-container">
        <button className="card-girl">
          <img
            src={girl}
            alt="girl"
            width="90rem"
            height="90rem"
            style={{ marginTop: 20 }}
          ></img>
          <Link className="link-decorator" to="/hostel?selected=girl">
            Girls Hostel
          </Link>
        </button>
        <button className="card-boy">
          <img
            src={boy}
            alt="boy"
            width="90rem"
            height="90rem"
            style={{ marginTop: 20 }}
          ></img>
          <Link className="link-decorator" to="/hostel?selected=boy">
            Boys Hostel
          </Link>
        </button>
      </div>
    </div>
  );
}
