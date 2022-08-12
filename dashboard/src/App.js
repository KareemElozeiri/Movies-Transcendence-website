import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GuestPage from "./pages/guest-page/GuestPage";
import LoginPage from './pages/login-page/LoginPage';
import SignUpPage from './pages/signup-page/SignUpPage';

import "bootstrap/dist/css/bootstrap.min.css"


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <GuestPage />} />
            <Route path="/login" element={ <LoginPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );

  }

}

export default App;
