// components/GameForm.js
import React, { useState } from 'react';
import axios from 'axios';

const GameForm = () => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newGame = { name, url, author, publishedDate };
        await axios.post('https://timepass-games-vqp3.onrender.com/api/game', newGame);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Game Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="url" placeholder="Game URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <input type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} required />
            <button type="submit">Create Game</button>
        </form>
    );
};

export default GameForm;
