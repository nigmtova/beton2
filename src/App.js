import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './js/Home'
import Navbar from './js/Navbar'
import Footer from './js/Footer'
import News from './js/News'
import Kankulyator from './js/Kankulyator';
import Partners from './js/Partners';


export default function App() {

  return (

    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Kankulyator" element={<Kankulyator />} />
        <Route path="/Partners" element={<Partners />} />
        {/* <Route path="/Article" element={<Article />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );}
