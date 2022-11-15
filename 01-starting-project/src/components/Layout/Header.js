import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import PopUp from "../Meals/MealsSummary";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes.img}>
      <img src={mealsImage} alt="header food"/>
      </div>
      <PopUp />
    </Fragment>
  );
};

export default Header;
