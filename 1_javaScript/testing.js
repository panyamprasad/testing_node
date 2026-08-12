import express from 'express';

const app = express();
const port = 3000;

const users = [
  {
    id: 1,
    name: 'Prasad'
  },
  {
    id: 2,
    name: 'Panyam'
  }
];

app.get('/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  const foundUser = users.find(u => u.id === userId);

  if (foundUser) {
    res.json(foundUser);
  } else {
    res.status(404).json({
      message: 'User not found'
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});