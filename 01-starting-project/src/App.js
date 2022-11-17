import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary";

const dummyMeals = [
  {
    id: "e1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: "$22.99",
  },
  {
    id: "e2",
    name: "Schnitzel",
    description: "A german speciality!",
    price: "$16.50",
  },
  {
    id: "e3",
    name: "Berbecue Burger",
    description: "American,raw,meaty",
    price: "$12.99",
  },
  {
    id: "e4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: "$10.75",
  },
];

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);


const cartOpenHandler=()=>{
  setIsCartOpen(true);
}

const cartCloseHandler=()=>{
  setIsCartOpen(false);
}

  return (
    <div>
      <Header onCartOpen={cartOpenHandler}></Header>
      <MealsSummary />
      {isCartOpen && <Cart  onCartClose={cartCloseHandler} />}
      <Meals items={dummyMeals} />
    </div>
  );
}

export default App;
