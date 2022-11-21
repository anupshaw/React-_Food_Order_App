import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary";
import CartProvider from "./components/Store/CartProvider";

const dummyMeals = [
  {
    id: "e1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: "22.99",
  },
  {
    id: "e2",
    name: "Schnitzel",
    description: "A german speciality!",
    price: "16.50",
  },
  {
    id: "e3",
    name: "Berbecue Burger",
    description: "American,raw,meaty",
    price: "12.99",
  },
  {
    id: "e4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: "10.75",
  },
];

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);


const showCartHandler=()=>{
  setCartIsShown(true);
}

const hideCartHandler=()=>{
  setCartIsShown(false);
}

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler}></Header>
      <MealsSummary />
      {cartIsShown && <Cart  onCartClose={hideCartHandler} />}
      <Meals items={dummyMeals} />
    </CartProvider>
  );
}

export default App;
