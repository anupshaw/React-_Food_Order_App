import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton  onConfirmation={props.onCartOpen}/>
      </header>
      <div className={classes.img}>
      <img src={mealsImage} alt="header food"/>
      </div>
    </Fragment>
  );
};

export default Header;
