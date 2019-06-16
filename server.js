const express = require('express');

const app = express();

app.get('/api/customers', (req,res)=>{
    const custormers =[
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Caroline', lastName: 'Visnevska'},
        {id: 3, firstName: 'Stephen', lastName: 'Lou'}
    ]
    res.json(custormers);
})

const port = 5000;

app.listen(port, ()=>{
    console.log('Server started')
})