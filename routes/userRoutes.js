import express from 'express';
const router = express.Router();

const users = [
  { id: 1, name: 'name' },
  { id: 2, name: 'name2' }
];

// ✅ GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// ✅ GET user by ID
router.get('/:id', (req, res, next) => {
  try {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// ✅ POST add new user
router.post('/', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Input data missing' });
  }

  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

export default router;
