// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import gamesRoutes from './routes/games.js';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use('/api', gamesRoutes);

// MongoDB Connection
mongoose.connect('mongodb+srv://utkarshkesharwani3:fcxFnciDXnqa6IeO@cluster0.05p9zdl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
