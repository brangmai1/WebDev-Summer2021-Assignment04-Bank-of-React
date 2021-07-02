// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Debits from './components/debits';
import Credits from './components/credits';
import LogIn from './components/Login';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'Brang_Mai',
        memberSince: '06/20/2021',
      }
    }
  }
  
  render() {

    const mockLogIn = (logInInfo) => {
      const newUser = {...this.state.currentUser}
      newUser.userName = logInInfo.userName
      this.setState({currentUser: newUser})
    }  
 
    const homeComponent = () => (
      <Home accountBalance={this.state.accountBalance} /> 
    );

    const userProfileComponent = () => (
      <UserProfile 
        userName={this.state.currentUser.userName} 
        memberSince={this.state.currentUser.memberSince} 
      /> 
    );

    // const debitsComponent = () => (
    //   <Debits
    // );

    const logInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );

    return (
      <Router>       
        <div>             
          <Route exact path="/" render={homeComponent} />
          <Route exact path="/userProfile" render={userProfileComponent} />
          <Route exact path="/login" render={logInComponent} />
        </div>        
      </Router>
    );    
  }
}


export default App;