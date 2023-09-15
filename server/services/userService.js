const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = 'm0sTD@ng3rouSPa$$worD1995';

async function register(username, password) {
    const existing = await User.findOne( { email }).collation( { locale: 'en', strength: 2 });

    if(existing) {
        throw new Error('Email already used !')
    }

    const user = await User.create({
        email,
        hashedPassword: await bcrypt.hash(password, 10)
    }); 

    return {
        _id: user._id,
        username: user.username,
        accessToken: createToken(user)
    };
};

async function login(username, password) {
    
};

async function logout() {
    
};

function createToken(user) {
    const payload = {
        _id: user._id,
        username: user.username
    };

    const token = jwt.sign(payload, secret);
    return token;
};

module.exports = {
    register, 
    login,
    logout
}