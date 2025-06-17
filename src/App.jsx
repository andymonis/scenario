import './App.css'

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { add, resolve } from './slice/router.js';

// import { decrement, increment } from './counterSlice.js'

import Header from "./pages/Header.jsx";
import Landing from "./pages/Landing.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import IsasList from "./pages/IsaList.jsx";
import IsasDetail from "./pages/IsaDetail.jsx";
import Invest from "./pages/Invest.jsx";
import Payment from "./pages/Payment.jsx";
import Confirmation from "./pages/Confirmation.jsx";

add("/", Landing )
add("/register", Register )
add("/home", Home )
add("/isas-list", IsasList )
add("/isas-detail", IsasDetail )
add("/invest", Invest )
add("/payment", Payment )
add("/confirmation", Confirmation )

function App() {

  const path = useSelector((state) => state.router.path);

  // const dispatch = useDispatch();
  let DynamicComponent = resolve(path);

  return (
    <>
      <Header />
      <DynamicComponent />
    </>
  )
}

export default App