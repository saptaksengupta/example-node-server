/**
 * Global Middlewares
 */

const myLogger = (req, res, next) => {
    // middleware
    console.log("My custom request Logger!");
    next();
}

//// ======================= //////


/**
 * User related middlewares
 */ 

const authenticated = (error, req, res, next) => {
    const auth = req.query.auth;
    if (auth === 'false') {
        res.json({
            data: "Sorry, you are not logged In!",
            resp: 200
        });
    }
    next();
}

const subscribtion = (req, res, next) => {
    const isSubscribed = req.query.isSub;
    if (isSubscribed === 'false') {
        res.json({
            data: "You are not subscbed to view this record!",
            code: 200
        });
    }
    next();
}


// ================ User middlewares ===============

module.exports = {myLogger, authenticated, subscribtion};