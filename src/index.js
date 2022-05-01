import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './fonts/Nunito-SemiBold.ttf';
import CategoryList from './pages/categoryList/categoryList.js';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import SingleProduct from "./pages/singleProduct.js/singleProduct";
import NotFound from "./components/notFound/notFound";
import FindProduct from "./pages/findProduct/findProduct";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/category/:id' element={<CategoryList/>}/>
      <Route path='/product/:id' element={<SingleProduct/>}/>
      <Route path='/search/:title' element={<FindProduct/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
