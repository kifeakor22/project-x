import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Helmet} from "react-helmet";
import Product from './components/products';

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
        <Routes>
          <Route path='/' element= {<Home/>}></Route>
           <Route path="/product" element={<Product/>}></Route>
      </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
