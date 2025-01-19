const express = require('express');

const app = express();

app.get('/getJsonData',(req,res)=>{
    res.json([{name:'SHR'}]);

});

app.get('/api/routeParameter/:rParameter', (req,res)=>{

    res.status(200).send(`Route parameter is ${req.params.rParameter}`).end();
    // res.status(200).send(`Route parameter is ${req.params.rParameter}`);
})


app.all('*',(req,res)=>{
    res.status(404).send('Resource not available');
});

app.listen(5000,()=>{
    console.log("Server is listening on port 5000");
});
