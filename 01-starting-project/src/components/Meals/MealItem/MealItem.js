import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <div className={classes.mealItem}>
      <div className={classes.meals}>
        <div className={classes.mealsName}>{props.name}</div>
        <div className={classes.mealsDescription}>{props.description}</div>
        <div className={classes.mealsPrice}>{props.price}</div>
      </div>
      <MealItemForm />
    </div>
  );
};

export default MealItem;
