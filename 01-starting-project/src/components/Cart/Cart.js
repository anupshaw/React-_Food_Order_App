import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";

const CartOverlay =()=>{
  return (
    <div className={classes.cart}>
      <p>Sushi</p>
      <div className={classes.amount}>
        <p>Total Amount</p>
        <p>35.62</p>
      </div>
      <div className={classes.button}>
        <button className={classes.btn1}>close</button>
        <button className={classes.btn2}>button</button>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <CartOverlay />,
        document.getElementById("cartRoot")
      )}
    </Fragment>
  );
};

export default Cart;
