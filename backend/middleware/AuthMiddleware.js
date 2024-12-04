const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        req.user = decoded; // Add user data to the request object
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = authenticate;
