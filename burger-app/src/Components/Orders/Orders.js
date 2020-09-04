import React, { Component } from "react";
import Order from "../../Components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../hoc/ErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((response) => {
        const fetchedOrders = [];
        //zelimo object pretvorit u array
        for (let key in response.data) {
          //u array pushamo object ciji key gledamo, ali usput cemo spreadat sve njegove propertije, i dodat cemo tom novom objektu id
          fetchedOrders.push({ ...response.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((err) => this.setState({ loading: false }));
  }

  render() {
    const orderArray = [...this.state.orders];

    return (
      <div>
        {orderArray.map((el) => (
          <Order key={el.id} ingredients={el.ingredients} price={+el.price} />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
