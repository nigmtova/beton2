import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './js/Home'
import Navbar from './js/Navbar'
import Footer from './js/Footer';

export default function App() {

  return (

    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes> 
        <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>



    </div>
  );}
