import React, { useContext } from "react";
import CartContext from "../../Store/cart-Context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addtoCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      key: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <div className={classes.mealItem}>
      <div className={classes.meals}>
        <div className={classes.mealsName}>{props.name}</div>
        <div className={classes.mealsDescription}>{props.description}</div>
        <div className={classes.mealsPrice}>{`$ ${props.price}`}</div>
      </div>
      <MealItemForm onAddToCart={addtoCartHandler} />
    </div>
  );
};

export default MealItem;
