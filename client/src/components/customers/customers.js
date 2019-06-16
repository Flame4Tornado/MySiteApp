import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
    state = { 
        customers: []
     }

     componentDidMount(){
         fetch('/api/customers')
         .then(res => res.json())
         .then(customers => this.setState({
             customers
         }, ()=>{console.log(customers)}))
         .catch(err => console.log(err))
     }
    render() { 
        return ( <>
        <h2>Customers</h2>
        <ul>
            {this.state.customers.map(customer => <li key={customer.key}>{customer.firstName} {customer.lastName}</li>)}
        </ul>
        </> );
    }
}
 
export default Customers;