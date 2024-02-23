import jwt from 'jsonwebtoken';
import { db } from '../db.js';

const authenticateToken = (req, res, next) => {
 
    const token = req.cookies.access_token || req.headers.authorization || req.query.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

 
    jwt.verify(token, 'jwtkey', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
        } else {
            
            const userId = decoded.id;

           
            const q = 'SELECT * FROM users WHERE id = ?';
            db.query(q, [userId], (err, data) => {
                if (err || !data.length) {
                    return res.status(401).json({ message: 'Unauthorized: User not found' });
                } else {
                    
                    req.user = data[0];
                    next(); 
                }
            });
        }
    });
};

export default authenticateToken;
