import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Photos from "./pages/Photos"
import Cart from './pages/Cart'
import { Context } from './contextCustom.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Context>
      <Routes>
          <Route path="/" element={<App />}>
              
              <Route index element={<Photos />}/>
              <Route path="cart" element={<Cart />}/>
              <Route path="*" element={<p>There`&apos`s notheing here</p>}/>
          </Route>
      </Routes>
    </Context>
  </BrowserRouter>
);