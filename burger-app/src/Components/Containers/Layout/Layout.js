import React, { Component } from "react";
import classes from "./Layout.css";
import Aux from "../../hoc/Aux";
import Toolbar from "../../Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  manageMenuHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar manageMenu={this.manageMenuHandler} />
        <SideDrawer
          show={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;

// imali smo jsx elemente. mozemo vratit array i svaki element triba imat key.
// ili kreiramo HOC koja sluzi da sve wrapa i odmah outputa. Time izvrši zadacu da sve treba bit wrapano
