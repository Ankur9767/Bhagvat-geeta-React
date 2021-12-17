import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Chapter from './Chapter';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/Chapter" element={<Chapter />}>
      </Route>    
      <Route path="/contact" element={<Contact />}>

        </Route>
      
    </Routes>   
      
    </div>
    </BrowserRouter>
  );
}

export default App;
