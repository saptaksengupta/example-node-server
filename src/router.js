const express = require('express');
const router = express.Router();

// facebook.com/foo-bar ==> if you are logged in 
// facebook.com/foo-bar ==> if not logged in 

router.get("/", (req, res) => {
    res.json({
        data: "From the user router!",
        code: 200
    })
});

router.post("/", (req, res) => {
    res.json({
        data: "From the user router post request!",
        code: 200
    })
})


module.exports = router;