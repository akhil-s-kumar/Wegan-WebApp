import React from "react";
import "./Button.css";
import { NavLink } from "react-router-dom";

const Button = (props) => {
  return (
    <div>
      <NavLink to={props.link}>
        <button className="btn btnoutline" type="submit">
          {props.name}
        </button>
      </NavLink>
    </div>
  );
};

export default Button;
