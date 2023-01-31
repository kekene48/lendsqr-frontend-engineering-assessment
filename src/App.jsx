import React from "react";
import Login from "./pages/Login/Login";
import Dashboard from './pages/Dashboard/Dashboard'
import Filtered from './pages/Filtered/Filtered'
import Details from "./pages/Details/Details";
import Error from "./pages/Error/Error";
import Screen from "./pages/Error/Screen";
import './App.scss'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  if(window.innerWidth < 1365) {
    return (
      <Router>
      <Switch>
        <Route  exact path="/">
          <Screen />
        </Route>
        <Route  exact path="/dashboard">
          <Screen />
        </Route>
        <Route  exact path="/filtered">
          <Screen />
        </Route>  
        <Route exact path='/details'>
          <Screen />
        </Route>
        <Route exact path='/*'>
          <Error />
        </Route>
      </Switch>
            
    </Router> 
    )
  } else { 
    return (
    <Router>
      <Switch>
        <Route  exact path="/">
          <Login />
        </Route>
        <Route  exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route  exact path="/filtered">
          <Filtered />
        </Route>  
        <Route exact path='/details'>
          <Details />
        </Route>
        <Route exact path='/*'>
          <Error />
        </Route>
      </Switch>
            
    </Router> 
  );
  }
  
}

export default App; 


