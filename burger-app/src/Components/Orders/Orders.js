import React, { Component } from "react";
import Order from "../../Components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../hoc/ErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Spinner from "../UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.order_init(this.props.token, this.props.userId);
  }

  render() {
    const orderArray = [...this.props.orders];
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = orderArray.map((el) => (
        <Order key={el.id} ingredients={el.ingredients} price={+el.price} />
      ));
    }
    return <div>{orders}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    order_init: (token, userId) => dispatch(actions.order_init(token, userId)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
