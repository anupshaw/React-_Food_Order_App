import React from "react";
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
  return (
    <div>
      <Header></Header>
      <MealsSummary />
      <Meals items={dummyMeals} />
    </div>
  );
}

export default App;
