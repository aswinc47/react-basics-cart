import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Cart from './components/Cart';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ProductView from './components/ProductView';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' Component={Cart}/>
        <Route path='/item/:id' Component={ProductView}/>
      </Routes>
    </div>
  );
}

export default App;
