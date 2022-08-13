import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GuestPage from "./pages/guest-page/GuestPage";
import LoginPage from './pages/login-page/LoginPage';
import SignUpPage from './pages/signup-page/SignUpPage';

import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from './pages/home-page/HomePage';


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
            <Route exact path="/" element={ <GuestPage />} />
            <Route excat path="/login" element={ <LoginPage/>} />
            <Route exact path="/signup" element={<SignUpPage/>} />
            <Route exact path="/home" element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );

  }

}

export default App;
