import React from "react";
import classes from "./NavigationItems.css";
import Item from "../NavigationItems/NavigationItem/NavigationItem";

const NavigationItems = (props) => (
  <ul className={classes.NavItems}>
    <Item link="/">Home</Item>
    {props.isAuth ? <Item link="/orders">Orders</Item> : null}

    {props.isAuth ? (
      <Item link="/logout">Log out</Item>
    ) : (
      <Item link="/auth">Auth</Item>
    )}
  </ul>
);

export default NavigationItems;
