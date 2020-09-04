import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classess from "./CheckoutSummery.css";

const CheckoutSummary = (props) => {
  return (
    <div className={classess.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <div style={{ width: "100%", margin: "auto", height: "300px" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button buttonType="Danger" clicked={props.checkoutCancelled}>
        {" "}
        CANCLE
      </Button>
      <Button buttonType="Success" clicked={props.checkoutContinued}>
        {" "}
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
