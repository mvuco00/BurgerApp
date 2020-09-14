import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Burger/Burger";
import Modal from "../../UI/Modal/Modal";
import OrderSummary from "../../../Components/Burger/OrderSummary/OrderSummary";
import BuildControls from "../../Burger/BuildControls/BuildControls";
import axios from "../../../axios-orders";
import Spinner from "../../UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/ErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/index";

class BurgerBuilder extends Component {
  state = {
    buying: false,
  };
  componentDidMount() {
    this.props.onInitIngredients();
    /*
    axios
      .get("https://myburger-ddfc6.firebaseio.com/ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
      */
  }

  updateBuyableState(ingredients) {
    const sum = Object.values(ingredients).reduce((sum, el) => {
      return sum + el;
    }, 0);
    this.setState({ buyable: sum > 0 });
  }

  showModalHandler = () => {
    this.setState({ buying: true });
  };
  modalContinueHandler = () => {
    this.props.buyInit();
    this.props.history.push("/checkout");
  };

  modalClosedHandler = () => {
    this.setState({ buying: false });
  };

  render() {
    const disabledInfo = { ...this.props.ings };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; //ovo vrati true ili false i updateamo nasu varijablu (ne nas state) {salad:true, meat:false}
    }
    let orderSummary = null;

    let burger = this.props.error ? (
      <p>Ingredients cant be loaded</p>
    ) : (
      <Spinner />
    );
    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            //u buildControls komponenti mi ovim metodama saljemo tip, a taj tip se ocekiva doli u dispatchu
            addIngredients={this.props.onIngredientAdded}
            removeIngredients={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            buy={this.props.buyable}
            buying={this.showModalHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          clicked={this.modalClosedHandler}
          continue={this.modalContinueHandler}
          price={this.props.price}
        />
      );
    }

    return (
      <Aux>
        <Modal show={this.state.buying} modalClosed={this.modalClosedHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    buyable: state.burgerBuilder.buyable,
    error: state.burgerBuilder.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (name) => dispatch(actionTypes.addIngredient(name)),
    onIngredientRemoved: (name) => dispatch(actionTypes.removeIngredient(name)),
    onInitIngredients: () => dispatch(actionTypes.initIngredients()),
    buyInit: () => dispatch(actionTypes.buy_init()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
