import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './assets/styles/globals.css';

import Header from './components/layout/Header';
import MainContent from './components/layout/MainContent';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';

function App() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isGridView, setIsGridView] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:8080/api/games');
        
        // Simular un pequeño retraso para mostrar la animación de carga
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setIsLoading(false);
        setIsInitialLoad(false);
      }
    };

    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    // Verificar el tema preferido del sistema
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
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

  if (isInitialLoad) {
    return <LoadingSpinner />;
  }

  return (
    <div 
      className={`min-h-screen bg-background text-foreground transition-colors duration-300 ${darkMode ? 'dark' : ''}`}
    >
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isGridView={isGridView}
        setIsGridView={setIsGridView}
      />

      <MainContent 
        games={filteredGames}
        isGridView={isGridView}
        isLoading={isLoading}
      />

      <Footer />
    </div>
  );
}

export default App;