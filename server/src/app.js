import express from 'express';
import cors from 'cors';
import goalRoutes from './routes/goal.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api', goalRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});