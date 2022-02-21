import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Itemlist from './pages/Itemlist';
import Things from './pages/Things';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { Router, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import ProductItems from './pages/ProductItems';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Shoe from './pages/Shoe';



const App = () =>{

       
  return (
<div className='App'>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='register' element={<Register/>}/>
  <Route path='login' element={<Login/>}/>
  <Route path='categories' element={<Categories/>}/>
  <Route path='products' element={<Products/>}/>
  <Route path='shoe' element={<Shoe/>}/>
  <Route path='itemlist' element={<Itemlist/>}/>
</Routes>



</div>



  )
  
  
  
  
    }


export default App;
