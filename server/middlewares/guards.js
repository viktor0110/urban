function hasUser() {
    return (req, res, next) => {
        if(req.user) {
            next();
        }else {
            res.status(401).json({ message: 'Please log in'});
        }
        
    } 
}

function isAdmin() {
    return (req, res, next) => {

        if(req.isAdmin == 'admin') {
            next();
        }else {
            res.status(401).json({ message: 'You don`t have access to do that!'});
        }
        
    } 
}

function isGuest() {
    return (req, res, next) => {
        if(req.user) {
            res.status(400).json({ message: 'You are already logged in'});
        }else {
            next();
        }
    }
}

module.exports = {
    hasUser,
    isGuest,
    isAdmin,
}