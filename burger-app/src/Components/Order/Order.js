import React from "react";
import classes from "./Order.css";

const Order = (props) => {
  //treba objekt pretvorti u Array
  const ingredients = [];
  for (let ingrName in props.ingredients) {
    ingredients.push({ name: ingrName, amount: props.ingredients[ingrName] });
  }

  const ingrOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          display: "inline-block",
          margin: "0 8px",
          padding: "5px",
          border: "1px solid grey",
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingrOutput}</p>
      <p>
        Price: <strong>HRK {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};
export default Order;
