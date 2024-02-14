
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Base from "./components/Base";
import Topping from './components/Topping';
import Order from './components/Order';
import { useState } from 'react';

function App() {

  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
<BrowserRouter>
<Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/base" element={ <Base addBase={addBase} pizza={pizza} /> } />
    <Route path="/toppings" element={ <Topping addTopping={addTopping} pizza={pizza} /> } />
    <Route path='/order' element={ <Order pizza={pizza} />} />
  </Routes>
</BrowserRouter>
  )
}

export default App
