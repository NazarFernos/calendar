import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AboutUs from './pages/AboutUs/index';
import HomePage from './pages/Homepage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage}/>
        <Route path="/aboutUs" component={AboutUs}/>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
