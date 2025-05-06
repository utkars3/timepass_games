import express from 'express';
import Game from '../models/Game.js';

const router = express.Router();

// Create a Game
router.post('/game', async (req, res) => {
    try {
        const { name, url, author, publishedDate } = req.body;
        const game = new Game({ name, url, author, publishedDate });
        await game.save();
        res.status(201).json(game);
    } catch (err) {
        res.status(500).json({ error: 'Server error',err });
    }
});

// Get a single game
router.get('/game/:id', async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        if (!game) return res.status(404).json({ error: 'Game not found' });
        res.status(200).json(game);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get all games
router.get('/games', async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Update a game
router.put('/game/:id', async (req, res) => {
    try {
        const { name, url, author, publishedDate } = req.body;
        const game = await Game.findByIdAndUpdate(
            req.params.id,
            { name, url, author, publishedDate },
            { new: true }
        );
        if (!game) return res.status(404).json({ error: 'Game not found' });
        res.status(200).json(game);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete a game
router.delete('/game/:id', async (req, res) => {
    try {
        const game = await Game.findByIdAndDelete(req.params.id);
        if (!game) return res.status(404).json({ error: 'Game not found' });
        res.status(200).json({ message: 'Game deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
