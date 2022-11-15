import React from "react";
import classes from './AvailableMeals.module.css'


const AvailableMeals=(props)=>{


    return (<div className={classes.availableMeals}>
        <div className={classes.mealsName}>{props.name}</div>
        <div className={classes.mealsDescription}>{props.description}</div>
        <div className={classes.mealsPrice}>{props.price}</div>
    </div>)
}

export default AvailableMeals;