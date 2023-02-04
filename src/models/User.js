const mongoose = require('mongoose');
// {
//     _id: 1381263871283,
//     name: "John Doe",
//     age: 100,
//     designation: SDE 
// }

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be present!"]
    },
    age: {
        type: Number,
        required: [true, "Age must be present!"]
    },
    designation: {
        type: String,
        enum: ['SDE', 'CS', 'SALES'],
        default: 'SDE'
    }
});

module.exports = mongoose.model('User', userSchema); 