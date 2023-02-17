import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='body-container'>
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />}></Route>
            <Route path="/employees" element={<ListEmployeeComponent />}></Route>
            <Route path="/add-employee/:id" element={<CreateEmployeeComponent />}></Route>
            <Route path="/view-employee/:id" element ={<ViewEmployeeComponent/>}></Route>
            {/* <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} ></Route> */}
          </Routes>
        </div>
        <br />
        <FooterComponent />
      </Router>
    </div>

  );

}

export default App;
