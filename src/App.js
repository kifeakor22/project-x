import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Helmet} from "react-helmet";
import Product from './components/products';
import AboutUs from './components/about';
import Nav from './components/nav';
import Footer from './components/footer';
import BlogList from './components/blog';
import NoviceSection from './components/novice';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Helmet>
          <title>WhiskyTopia</title>
        </Helmet>
        <Nav />
        <Routes>
          <Route path='/' element= {<Home/>}></Route>
           <Route path="/product" element={<Product/>}></Route>
           <Route path="/about-us" element={<AboutUs />} />
           <Route path='/blog' element={<BlogList />} />
           <Route path='/novice' element={<NoviceSection/>} />
      </Routes>
      <Footer/>
      </div>
      </Router>
    </div>
  );
}

export default App;
