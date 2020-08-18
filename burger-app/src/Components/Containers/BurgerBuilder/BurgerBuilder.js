import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Burger/Burger";
import Modal from "../../UI/Modal/Modal";
import OrderSummary from "../../../Components/Burger/OrderSummary/OrderSummary";
import BuildControls from "../../Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 1.1,
  bacon: 2,
  meat: 6.5,
  cheese: 3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 4,
    buyable: false,
    buying: false,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updateBuyableState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updateBuyableState(updatedIngredients);
  };

  updateBuyableState(ingredients) {
    const sum = Object.values(ingredients).reduce((sum, el) => {
      return sum + el;
    }, 0);
    this.setState({ buyable: sum > 0 });
  }

  showModalHandler = () => {
    this.setState({ buying: true });
  };

  render() {
    console.log("BurgerBuilder.js", this.state.ingredients);

    const disabledInfo = { ...this.state.ingredients };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; //ovo vrati true ili false i updateamo nasu varijablu (ne nas state) {salad:true, meat:false}
    }

    return (
      <Aux>
        <Modal show={this.state.buying}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredients={this.addIngredientHandler}
          removeIngredients={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          buy={this.state.buyable}
          buying={this.showModalHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
