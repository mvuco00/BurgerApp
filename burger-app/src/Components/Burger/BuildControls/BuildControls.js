import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "salad", type: "salad" },
  { label: "meat", type: "meat" },
  { label: "bacon", type: "bacon" },
  { label: "cheese", type: "cheese" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControlss}>
    <p>
      Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((el) => (
      <BuildControl
        key={el.label}
        label={el.label}
        addIngredients={() => props.addIngredients(el.type)}
        removeIngredients={() => props.removeIngredients(el.type)}
        disabled={props.disabled[el.type]} //dohvatimo vrijedost za odredeni type
      />
    ))}
    {console.log(props.buy)}
    <button
      className={classes.OrderButton}
      disabled={!props.buy}
      onClick={props.buying}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
