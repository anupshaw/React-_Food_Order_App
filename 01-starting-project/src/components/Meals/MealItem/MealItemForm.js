import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <div className={classes.form}>
      <div className={classes.amount}>
        <p>Amount</p><p className={classes.itemNumber}>1</p>
      </div>
      <button type="click">+Add</button>
    </div>
  );
};

export default MealItemForm;
