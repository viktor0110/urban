const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = 'm0sTD@ng3rouSPa$$worD1995';

async function register(email, password, fullName, phone) {
    const existing = await User.findOne( { email }).collation( { locale: 'en', strength: 2 });
    
    if(existing) {
        throw new Error('Email already used !')
    }
    
    
    const user = await User.create({
        email,
        hashedPassword: await bcrypt.hash(password, 10),
        fullName,
        phone
    }); 
    

    return {
        _id: user._id,
        email: user.email,
        fullName,
        phone,
        _role: user.roles[0],
        accessToken: createToken(user)
    };
};

async function login(email, password) {
   const user = await User.findOne( { email }).collation( { locale: 'en', strength: 2 });

   if(!user) {
    throw new Error('Incorrect email or password');
   }
   
   const match = await bcrypt.compare(password, user.hashedPassword);

   if(!match) {
    throw new Error('Incorrect email or password');
   }
    
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