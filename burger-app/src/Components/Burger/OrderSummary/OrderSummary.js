import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("ORDER-SUMMARY componentDidUpdate");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((el) => {
      return (
        <li key={el}>
          <span style={{ textTransform: "capitalize" }}>{el}</span>:{" "}
          {this.props.ingredients[el]}
        </li>
      );
    });
    return (
      <Aux>
        <h1>Your order</h1>
        <p>Burger with next ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          Total price: <strong>{this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>

        <Button buttonType="Danger" clicked={this.props.clicked}>
          CANCLE
        </Button>
        <Button buttonType="Success" clicked={this.props.continue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
