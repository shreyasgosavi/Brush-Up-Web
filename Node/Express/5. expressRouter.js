const express = require('express');

const route = require('../router/appRouter')

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api',route);

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000");
});

app.use((req,res,next)=>{
    console.log("URL "+req.url);
    console.log("URL "+req.body);
    next();
});