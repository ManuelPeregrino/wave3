// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'; // Correct import; remove handleClick
import {Route, Routes} from "react-router-dom"
import Landing from "./components/pages/Landing"
import About from "./components/pages/About"
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup"
import Loan from "./components/pages/Loan"


function App() {
  
 
  return (
    <>
    <Routes>
      <Route path="/" element = {<Landing/>}/>
      <Route path="/About" element = {<About/>}/>
      <Route path="/Login" element = {<Login/>}/>
      <Route path="/Signup" element = {<Signup/>}/>
      <Route path="/Loan" element = {<Loan/>}/>
    </Routes>
    </>
  )
}

export default App
