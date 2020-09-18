import React from "react";
import classes from "./NavigationItems.css";
import Item from "../NavigationItems/NavigationItem/NavigationItem";

const NavigationItems = (props) => (
  <ul className={classes.NavItems}>
    <Item link="/">Home</Item>
    <Item link="/orders">Orders</Item>
    <Item link="/auth">Auth</Item>
  </ul>
);

export default NavigationItems;
