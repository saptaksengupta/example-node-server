/**
 * Routes related Posts.
 */

const express = require('express');
const router = express.Router();

//http://localhost:8081/posts/ (GET)
router.get("/", (req, res) => {
    res.json({
        data: "Reading Posts!",
        code: 200
    })
});

//http://localhost:8081/posts/ (POST)
router.post("/", (req, res) => {
    res.json({
        data: "Saving Posts",
        code: 200
    })
})


module.exports = router;