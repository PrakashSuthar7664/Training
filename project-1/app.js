const express = require('express');
const app = express();
const db = require('./server')
const port = 5001;


app.listen(port , ()=>{
    console.log(`server running on http://localhost:${port}`)
})