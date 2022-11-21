import React from "react";
import classes from './Meals.module.css'
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
const Meals = (props) => {
  return (
    <Card className={classes.meals}>
        {
      props.items.map((meal)=>{
           return   (<MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description}  price={meal.price} />)
      })
    }
    </Card>
  );
};

export default Meals;
