import React from "react";
import LogoB from "../../assets/images/burgerlogo.png";
import classes from "./Logo.css";

const Logo = () => (
  <div className={classes.Logo}>
    <img src={LogoB} alt="logo" />
  </div>
);
export default Logo;
