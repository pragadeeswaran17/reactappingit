import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './Routes/Resume';
import Home from './Routes/Home';
import Contact from './Routes/Contact';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>

      <Routes>
        <Route path = "/" element= {<Home/>}> </Route>
        <Route path = "/resume" element= {<Resume/>}> </Route>
        <Route path = "/contact" element= {<Contact/>}> </Route>
      </Routes>
      
      </BrowserRouter>
      
    </React.Fragment>
  );
}

export default App;

