import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onConfirmation}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.Cart_Description}>Your Cart</span>
      <span className={classes.batch}>0</span>
    </button>
  );
};

export default HeaderCartButton;
