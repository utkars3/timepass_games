import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('https://timepass-games-vqp3.onrender.com/api/games');
                setGames(response.data);
            } catch (error) {
                console.error("Failed to fetch games", error);
            }
        };
        fetchGames();
    }, []);

    const deleteGame = async (id) => {
        if (window.confirm('Are you sure you want to delete this game?')) {
            try {
                await axios.delete(`https://timepass-games-vqp3.onrender.com/api/game/${id}`);
                setGames(games.filter(game => game._id !== id));
                alert('Game deleted successfully');
            } catch (error) {
                console.error("Failed to delete game", error);
                alert('Failed to delete game');
            }
        }
    };

    return (
        <div>
            <h2>Game List</h2>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>URL</th>
                        <th>Author</th>
                        <th>Published Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game) => (
                        <tr key={game._id}>
                            <td>{game._id}</td>
                            <td>{game.name}</td>
                            <td><a href={game.url} target="_blank" rel="noopener noreferrer">{game.url}</a></td>
                            <td>{game.author}</td>
                            <td>{new Date(game.publishedDate).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => deleteGame(game._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GameList;
