import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true,unique: true },
    author: { type: String, required: true },
    publishedDate: { type: Date, required: true }
});

const Game = mongoose.model('Game', GameSchema);

export default Game;
