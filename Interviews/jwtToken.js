import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const SECRET_KEY = '123SecretKey1988@$!';

app.use(express.json());

// Middleware to verify the token:

function verifyToken(req, res, next) {
    const authHeader = req.headers['Authorization'];
    const token = authHeader && authHeader.split('')[1];
    if(!token){
        return res.status(401).json({
            message: 'Access Denied. No token provided.'
        })
    }
    try{
        const verify = jwt.verify(token, SECRET_KEY);
        req.user = verify;
        next();
    }catch(err){
        res.status(400).json({
            message: 'Invalid Token'
        })
    }
}

// Route to generate a token:

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // In a real application, we have to validate username and password form DB.
    if(username && password){
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({token});
    }else{
        res.status(400).json({
            message: 'Username and password are not valid'
        })
    }
});

// Protected route:
app.get('/protected', verifyToken, (req, res) => {
    res.json({
        message: 'This is a protected route',
        user: req.user
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));