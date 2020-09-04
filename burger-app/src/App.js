import React, { Component } from "react";
import { Route } from "react-router-dom";
import classes from "./App.css";
import Layout from "./Components/Containers/Layout/Layout";
import BurgerBuilder from "./Components/Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Components/Containers/Checkout/Checkout";
import Orders from "./Components/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/orders" component={Orders} />
          <Route path="/checkout" component={Checkout} />
        </Layout>
      </div>
    );
  }
}

export default App;
