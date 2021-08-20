import React from "react";
import { Link, useLocation } from "react-router-dom";

let gender = "X";

export default function ChooseHostel() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  if (queryParams.get("selected") === "girl") {
    gender = "G";
    return (
      <div className="container-hostel">
        <div>
          <h2>Choose a Hostel</h2>
        </div>

        <div className="hostel-grid">
          <button className="hostel-button">
            <Link className="link-decorator1" to="/room?hostel=G1">
              {gender}1
            </Link>
          </button>
          <button className="hostel-button">
            <Link className="link-decorator1" to="/room?hostel=G2">
              {gender}2
            </Link>
          </button>
          <button className="hostel-button">
            <Link className="link-decorator1" to="/room?hostel=G3">
              {gender}3
            </Link>
          </button>
          <button className="hostel-button">
            <Link className="link-decorator1" to="/room?hostel=G4">
              {gender}4
            </Link>
          </button>
          <button className="hostel-button">
            <Link className="link-decorator1" to="/room?hostel=G5">
              {gender}5
            </Link>
          </button>
          <button className="hostel-button">
            <Link className="link-decorator1" to="/room?hostel=G6">
              {gender}6
            </Link>
          </button>
        </div>
      </div>
    );
  } else {
    gender = "B";

    return (
      <div className="container-hostel">
        <div>
          <h2>Choose a Hostel</h2>
        </div>

        <div className="hostel-grid">
          <button className="hostel-button">
            <Link className="link-decorator1" to="/room?hostel=B1">
              {gender}1
            </Link>
          </button>
          <button className="hostel-button">
            <Link className="link-decorator1" to="/room?hostel=B2">
              {gender}2
            </Link>
          </button>
          <button className="hostel-button">
            <Link className="link-decorator1" to="/room?hostel=B3">
              {gender}3
            </Link>
          </button>
          <button className="hostel-button">
            <Link className="link-decorator1" to="/room?hostel=B4">
              {gender}4
            </Link>
          </button>
          <button className="hostel-button">
            <Link className="link-decorator1" to="/room?hostel=B5">
              {gender}5
            </Link>
          </button>
          <button className="hostel-button">
            <Link className="link-decorator1" to="/room?hostel=B6">
              {gender}6
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
