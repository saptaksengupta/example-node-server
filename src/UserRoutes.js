/**
 * Routes related users.
 */

const express = require('express');
const { myLogger, authenticated, subscribtion } = require('./middlewares');
const UserService = require('./services/UserService');
const router = express.Router();

router.use(myLogger); // Use this middleware with all the requests

// http://localhost:8081/users (GET)
router.get("/", authenticated, subscribtion, async (req, res) => {
    const userId = req.query.userId;
    try {
        // const userDetails = await UserService.getUsers();
        const userDetails = await UserService.getUserById(userId);
        res.json({
            data: userDetails,
            code: 200
        });
    } catch(err) {
        res.json({
            data: "Error Fetching User data",
            code: 404
        });
    }
});


// http:://localhost:8081/users/131/posts/12234
router.get("/:userId/posts/:postId", (req, res) => {
    const userId = req.params.userId;
    const postId = req.params.postId;
    res.json({
        data: "You are trying to fetch User details for " + userId + " and posts " + postId,
        code: 200
    });
});

//http://localhost:8081/users/ (POST)
router.post("/", async (req, res) => {
    const userDetails = req.body;
    try {
        await UserService.createUser(userDetails);
    } catch(err) {
        res.json({
            data: "Validation failed!",
            code: 400
        }).end();
    }
    res.json({
        data: "User details has been saved!",
        code: 200
    })
})

const readProducts = async () => {
    await connectDb();
    const products = await Product.find();
    return products;
}


module.exports = router;