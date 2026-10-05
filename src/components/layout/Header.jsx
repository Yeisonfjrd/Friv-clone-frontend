import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button';
import { Search, Menu, X, Sun, Moon, Grid, List } from 'lucide-react';

const Header = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory,
  categories,
  darkMode,
  toggleDarkMode,
  isGridView,
  setIsGridView 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'h-16 bg-background/80 backdrop-blur-md shadow-lg' : 'h-20 bg-transparent'
    }`}>
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Friv Clone
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <input
                type="text"
                placeholder="Buscar juegos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 px-4 py-2 rounded-full bg-background/10 border border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-full bg-background/10 border border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-background">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full hover:bg-primary/10"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsGridView(!isGridView)}
                className="rounded-full hover:bg-primary/10"
              >
                {isGridView ? <Grid className="w-5 h-5" /> : <List className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-primary/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-x-0 top-[64px] bg-background/95 backdrop-blur-md transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
          <div className="container mx-auto p-4 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar juegos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-background/10 border border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-background/10 border border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>

            <div className="flex justify-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full hover:bg-primary/10"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsGridView(!isGridView)}
                className="rounded-full hover:bg-primary/10"
              >
                {isGridView ? <Grid className="w-5 h-5" /> : <List className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 