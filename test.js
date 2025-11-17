import express from 'express';

const router = express.Router();

const users = [
    {
        id: 1,
        name: 'Prasad'
    },
    {
        id: 2,
        name: 'Panyam'
    }
]

//Get all users
router.get('/', (req, res) => {
    res.json(users);
});

//Get user by ID
router.get('/:id', (req, res, next) => {
    try {
        const user = users.find(u => u.id === parseInt(req.params.id));
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json(user);
    } catch (err) {
        next(err);
    }
});

//Post add new user
router.post('/', (req, res, next) => {
    try{
        const { name}  = req.body;
        if(!name){
            return res.status(400).json({
                message: 'Input data missing'
            })
        }
        const newUser = { id: users.length + 1, name };
        users.push(newUser);
        res.status(201).json(newUser);
    }catch(err){
        next(err);
    }
});

export default router;