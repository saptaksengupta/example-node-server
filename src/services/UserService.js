const connectDb = require("../db/Connection")
const User = require("../Models/User")

const createUser = async (userDetails) => {
    try {
        await connectDb();
        await User.create(userDetails);
    } catch(error) {
        console.log(error);
        throw Error(error);
    }
}

const getUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw Error(err);
    }
}

const getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw Error(err);
    }
}

module.exports = {createUser, getUsers, getUserById};