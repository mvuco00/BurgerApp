import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const buyBurgerSuccess = (id, orderdata) => {
  return {
    type: actionTypes.BUY_BURGER_SUCCESS,
    orderID: id,
    orderData: orderdata,
  };
};

export const buyBurgerFail = (error) => {
  return {
    type: actionTypes.BUY_BURGER_FAIL,
    error: error,
  };
};

export const buyBurgerStart = () => {
  return {
    type: actionTypes.BUY_BURGER_START,
  };
};

export const buyBurger = (orderData, token) => {
  return (dispatch) => {
    dispatch(buyBurgerStart());
    axios
      .post("/orders.json?auth=" + token, orderData)
      .then((response) => {
        dispatch(buyBurgerSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        dispatch(buyBurgerFail(error));
      });
  };
};

export const buy_init = () => {
  return {
    type: actionTypes.BUY_INIT,
  };
};

export const orders_succes = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const orders_fail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const orders_start = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const order_init = (token, userId) => {
  return (dispatch) => {
    dispatch(orders_start());
    const queryParams =
      "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';

    axios
      .get("/orders.json" + queryParams)
      .then((response) => {
        const fetchedOrders = [];
        //zelimo object pretvorit u array
        for (let key in response.data) {
          //u array pushamo object ciji key gledamo, ali usput cemo spreadat sve njegove propertije, i dodat cemo tom novom objektu id
          fetchedOrders.push({ ...response.data[key], id: key });
        }
        dispatch(orders_succes(fetchedOrders));
      })
      .catch((err) => dispatch(orders_fail(err)));
  };
};
