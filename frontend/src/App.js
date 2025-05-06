// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameForm from './components/GameForm';
import GameList from './components/GameList';
import GameDetails from './components/GameDetail';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Game CRUD App</h1>
        <Navbar/>
        <Routes>
          <Route path="/create" element={<GameForm />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/fetch" element={<GameDetails />} />
          <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
