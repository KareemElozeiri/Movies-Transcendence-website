import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GuestPage from "./pages/guest-page/GuestPage";

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
          </Routes>
        </BrowserRouter>
      </div>
    );

  }

}

export default App;
