import React from 'react';
import Dashboard from './Pages/Dashboard';
import Navbar from './Components/Navbar';
import Products from './Pages/Products';
import Orders from './Pages/Orders'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div id='root_child'>
       <Router>
          <Navbar/>
          <div id='right_child'>
            <Routes>
              <Route exact path='/' element={<Dashboard/>}/>
              <Route exact path='/products' element={<Products/>}/>
              <Route exact path='/orders' element={<Orders/>}/>
            </Routes>
          </div>
       </Router>
    </div>
    </>
  )
}

export default App