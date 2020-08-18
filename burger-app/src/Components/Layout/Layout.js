import React from "react";
import classes from "./Layout.css";
import Aux from "../../Components/hoc/Aux";

const Layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);
export default Layout;

// imali smo jsx elemente. mozemo vratit array i svaki element triba imat key.
// ili kreiramo HOC koja sluzi da sve wrapa i odmah outputa. Time izvrši zadacu da sve treba bit wrapano
