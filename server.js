import express from 'express';
import userRoutes from './routes/userRoutes.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

// Mount router
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Express Server!');
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
