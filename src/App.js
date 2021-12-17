import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.js';
import Form from './Components/Form.js';
import Order from './Components/Order.js';
import * as yup from 'yup';
import schema from './formSchema.js';
import axios from 'axios';
import './App.css'

const initialFormValues = {
  name: '',
  email: '',
  size:'',
  pepperoni: false,
  pineapple: false,
  cheese: false,
  veggies: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  email: '',
  special: '',
}

const initialOrder = [];

const initialDisabled = true;

const App = () => {

  const [order, setOrders] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([ res.data, ...order])
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  } 

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name:formValues.name.trim(),
      email:formValues.email.trim(),
      special:formValues.special.trim(),
    }
    postNewOrder(newOrder);
   
  }

   useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues]) 

  return (
    <div className='container'>
      <h1>Bloomtech Eats</h1>
      <nav>
          <div className='nav-wrapper'>
              <nav>
                  <Link className='home-btn' to='/'>Home</Link>
                  <Link className='order-btn' to='/pizza'>Order your 'za</Link>
              </nav>
          </div>
      </nav>
      {
        order.map(order => {
          return (
            <Order key={order.id} details={order} />
          )
        })
      }
     <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/pizza'>
          <Form 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
     </Switch>
    </div>
 
  );
};
export default App;
