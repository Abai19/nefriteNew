import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Nunito-SemiBold.ttf';
import ProductsList from './pages/productsList/productsList.js';
import {BrowserRouter as Router,Routes, Route, BrowserRouter} from 'react-router-dom';
import SingleProduct from './pages/productsList/singleProduct/singleProduct';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='products' element={<ProductsList/>}/>
      <Route path='singleProduct' element={<SingleProduct/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
