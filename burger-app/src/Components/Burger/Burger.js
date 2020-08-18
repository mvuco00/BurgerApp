import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  //kao props dobivamo object, keys() uzima sve kljuceve objekta i stavlja ih u array
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      //js default object Array(3) daje prazan array s 3 elemeneta, npr Array(cheese) daje array s dva prazna mista
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  console.log(transformedIngredients);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <div> Please pick elements </div>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />

      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
