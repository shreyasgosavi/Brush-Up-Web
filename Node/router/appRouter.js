const Express = require('express');

const router = Express.Router();

router.post("/aPostRequest", (req,res)=>{

    console.log(req.body);
    res.send('Cool');

});

module.exports = router;