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
import Landing from './Landing';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Landing />}>

      </Route>
      <Route path="/home/:chapter" element={<Home />}>
      </Route>
      <Route path="/Chapter/:chapter" element={<Chapter />}>
      </Route>    
      <Route path="/contact" element={<Contact />}>

        </Route>
      
    </Routes>   
      
    </div>
    </BrowserRouter>
  );
}

export default App;
