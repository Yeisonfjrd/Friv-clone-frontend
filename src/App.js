import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './assets/styles/globals.css';

function App() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredGame, setHoveredGame] = useState(null);
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/games');
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    fetchGames();
  }, []);

  const toggleFavorite = (gameId) => {
    const newFavorites = favorites.includes(gameId)
      ? favorites.filter(id => id !== gameId)
      : [...favorites, gameId];
    
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const filteredGames = games
    .filter(game => game.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(game => selectedCategory === 'all' || game.category === selectedCategory);

  const categories = ['all', 'arcade', 'adventure', 'puzzle', 'action', 'strategy', 'cards'];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="fixed top-0 left-0 w-full h-16 bg-gradient-to-r from-blue-600 to-purple-600 z-50">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Friv Clone</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Buscar juegos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-full bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              {categories.map(category => (
                <option key={category} value={category} className="text-gray-800">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsGridView(!isGridView)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              {isGridView ? '📱' : '🎮'}
            </button>
          </div>
        </div>
      </div>

      <main className="pt-24 pb-12 px-4 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
        <div className={`container mx-auto ${isGridView ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4' : 'flex flex-wrap justify-center gap-4'}`}>
          {filteredGames.map(game => (
            <div
              key={game.id}
              className={`relative group ${isGridView ? '' : 'w-64'}`}
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{game.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{game.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/20">
                        {game.category}
                      </span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(game.id);
                        }}
                        className="text-white hover:text-pink-500 transition-colors"
                      >
                        {favorites.includes(game.id) ? '❤️' : '🤍'}
                      </button>
                    </div>
                  </div>
                </div>
                {hoveredGame === game.id && (
                  <a
                    href={game.gameUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-xl font-bold hover:bg-black/70 transition-colors"
                  >
                    JUGAR AHORA
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Friv Clone - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
