import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
import apiRoutes from './routes/api';
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Crypto DEX Backend is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
