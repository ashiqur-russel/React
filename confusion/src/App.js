import React, { Component } from 'react'
import {  BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/Product/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

export default class App extends Component {
  render() {
    return (
    <Router>
      
    <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductList/>}/>
        <Route exact path="/details" element={<Details/>}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
        <Route  element={<Default/>}></Route>
      </Routes>
    </Router>        
    )
  }
}

