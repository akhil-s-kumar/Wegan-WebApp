import React from "react";
import {NavLink} from 'react-router-dom';

const NavItems = (props) => {
  return (
    <div>
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to={props.link}>
          {props.name}
        </NavLink>
      </li>
    </div>
  );
};

export default NavItems;