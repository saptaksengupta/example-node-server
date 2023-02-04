const mongoose = require('mongoose');

const uri = "mongodb+srv://saptaksengupta:kUr4lIBh8qeiDrVl@blogapp.2yuj3js.mongodb.net/BlogApp?retryWrites=true&w=majority";
// Establish a connection with the database.
const connectDb = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });   
}

module.exports = connectDb;