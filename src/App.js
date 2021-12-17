import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.js';
import Form from './Components/Form.js';

const App = () => {
  return (
    <div className='container'>
      <h1>Bloomtech Eats</h1>
      <nav>
          <div className='nav-wrapper'>
              <Link to='/'>Home of the pizza</Link>
              <Link to='/pizza' id='order-pizza'>Order your 'za</Link>
          </div>
      </nav>
     <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
          <Form />
        </Route>
     </Switch>
    </div>
 
  );
};
export default App;
