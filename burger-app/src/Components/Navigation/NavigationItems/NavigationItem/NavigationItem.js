import React from "react";
import classes from "./Item.css";
import { NavLink } from "react-router-dom";

const Item = (props) => (
  <li className={classes.Item}>
    <NavLink to={props.link} exact activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </li>
);

export default Item;
