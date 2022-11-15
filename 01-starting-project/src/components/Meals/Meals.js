import React from "react";
import classes from './Meals.module.css'
import AvailableMeals from "./AvailableMeals";
const Meals = (props) => {
  return (
    <div className={classes.meals}>
        {
      props.items.map((meal)=>{
           return   (<AvailableMeals name={meal.name} description={meal.description}  price={meal.price} />)
      })
    }
    </div>
  );
};

export default Meals;
