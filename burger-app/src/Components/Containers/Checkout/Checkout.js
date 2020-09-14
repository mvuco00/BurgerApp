import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import CheckoutSummary from "../../Order/CheckoutSummary/CheckoutSummery";
import { connect } from "react-redux";
import ContactData from "./../../Order/CheckoutSummary/ContactData/ContactData";
import * as actions from "../../../store/actions/index";

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = <Redirect to="/" />;

    if (this.props.ings) {
      const bought_redirect = this.props.bought ? <Redirect to="/" /> : null;
      summary = (
        <div>
          {bought_redirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return <div> {summary} </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    bought: state.order.bought,
  };
};

export default connect(mapStateToProps)(Checkout);
