import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review'
import Inventory from './components/Inventory/Inventory'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
         <Switch>
            <Route exact path="/Shop">
              <Shop></Shop>
            </Route>
            <Route path="/Review">
              <Review></Review>
            </Route>
            <Route path='/manage'>
            <Inventory></Inventory>
            </Route>
            <Route path='*'>
                          <Notfound></Notfound>
            </Route>
         </Switch>
      </Router>
        
        
        
    </div>
  );
}

export default App;
