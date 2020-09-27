import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutUs from './pages/AboutUs/index';
import HomePage from './pages/Homepage/index';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/aboutUs" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
