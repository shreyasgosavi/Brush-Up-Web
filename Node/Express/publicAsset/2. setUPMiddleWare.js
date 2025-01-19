const express = require('express');
const app = express();

app.use(express.static('./publicAsset'));
// app.get('/', (req,res)=>{
//     res.send("Home Page");
// })

app.all('*', (req,res)=>{
    res.status(404).send("Page not found.");
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000");
})