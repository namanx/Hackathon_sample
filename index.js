const express = require('express');

const findindb=require('./books');
const saveInDB=require('./users');

app.use(express.json()); 


app.get('/',(req,resp)=>{
    resp.send(findindb)
    
})

app.put('/',(req,resp)=>{
    resp.send(findindb)
})
app.listen(5000);