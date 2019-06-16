import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Customers from './components/customers/customers'


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <>
        <Customers/>
        </>
      </Router>
      

      );
  }
}
 
export default App;