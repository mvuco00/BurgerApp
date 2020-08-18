import React from "react";
import Aux from "../../hoc/Aux";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((el) => {
    return (
      <li key={el}>
        <span style={{ textTransform: "capitalize" }}>{el}</span>:{" "}
        {props.ingredients[el]}
      </li>
    );
  });
  return (
    <Aux>
      <h1>Your order</h1>
      <p>Burger with next ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default OrderSummary;
