const jwt = require('jsonwebtoken');
const validateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        res.status(401).send({ message: "Unauthorized user!" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            res.status(403).send({ message: "Invalid token" });
        }
        console.log(user, "user from token validation");
        req.user = user;
    });
    next();
};

module.exports = {
    validateToken,
}