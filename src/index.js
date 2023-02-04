const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./router');
const userRoutes = require('./UserRoutes');
const postRoutes = require('./PostRoutes');
const connectDb = require('./db/Connection');
const myApp =  express();
const port = 8081;

myApp.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

myApp.use(bodyParser.json()); // app level middleware

myApp.use('/', routes);
myApp.use('/users', userRoutes); 
myApp.use('/posts', postRoutes);


// Setting up database connection.
connectDb().then(() => {
    console.log("Database Connected!");
}).catch((err) => {
    console.log(err);
})

myApp.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});