import React from "react";
import classes from "./NavigationItems.css";
import Item from "../NavigationItems/NavigationItem/NavigationItem";

const NavigationItems = (props) => (
  <ul className={classes.NavItems}>
    <Item link="/" active>
      Home
    </Item>
    <Item link="/burger">Burger</Item>
  </ul>
);

export default NavigationItems;
