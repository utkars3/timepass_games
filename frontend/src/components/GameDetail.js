import React, { useState } from 'react';
import axios from 'axios';

const GameDetails = () => {
    const [gameId, setGameId] = useState('');
    const [game, setGame] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState('');

    const fetchGameById = async () => {
        try {
            const response = await axios.get(`https://timepass-games-vqp3.onrender.com/api/game/${gameId}`);
            setGame(response.data);
            setError('');
            setEditMode(false);
        } catch (err) {
            setGame(null);
            setError('Game not found');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGame({ ...game, [name]: value });
    };

    const updateGame = async () => {
        try {
            await axios.put(`https://timepass-games-vqp3.onrender.com/api/game/${gameId}`, game);
            alert('Game updated successfully');
            setEditMode(false);
        } catch (err) {
            alert('Failed to update game');
        }
    };

    return (
        <div>
            <h2>Fetch and Edit Game by ID</h2>
            <input
                type="text"
                placeholder="Enter Game ID"
                value={gameId}
                onChange={(e) => setGameId(e.target.value)}
            />
            <button onClick={fetchGameById}>Fetch</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {game && (
                <div style={{ marginTop: '20px' }}>
                    {editMode ? (
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={game.name}
                                onChange={handleInputChange}
                                placeholder="Game Name"
                            />
                            <input
                                type="text"
                                name="url"
                                value={game.url}
                                onChange={handleInputChange}
                                placeholder="Game URL"
                            />
                            <input
                                type="text"
                                name="author"
                                value={game.author}
                                onChange={handleInputChange}
                                placeholder="Author"
                            />
                            <input
                                type="date"
                                name="publishedDate"
                                value={game.publishedDate?.substring(0, 10)}
                                onChange={handleInputChange}
                            />
                            <button onClick={updateGame}>Save</button>
                            <button onClick={() => setEditMode(false)}>Cancel</button>
                        </div>
                    ) : (
                        <table border="1" cellPadding="10" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>URL</th>
                                    <th>Author</th>
                                    <th>Published Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{game.name}</td>
                                    <td>
                                        <a href={game.url} target="_blank" rel="noopener noreferrer">
                                            {game.url}
                                        </a>
                                    </td>
                                    <td>{game.author}</td>
                                    <td>{new Date(game.publishedDate).toLocaleDateString()}</td>
                                    <td>
                                        <button onClick={() => setEditMode(true)}>Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
};

export default GameDetails;
