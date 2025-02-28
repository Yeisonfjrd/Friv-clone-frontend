import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '../common/Button';
import { Card, CardContent } from '../common/Card';
import { Badge } from '../common/Badge';
import GameImage from '../common/GameImage';

const GameCard = ({ game, isGridView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  const defaultImages = {
    'adventure': '/images/default-adventure.jpg',
    'action': '/images/default-action.jpg',
    'arcade': '/images/default-arcade.jpg',
    'puzzle': '/images/default-puzzle.jpg',
    'strategy': '/images/default-strategy.jpg',
    'cards': '/images/default-cards.jpg'
  };

  return (
    <Card
      className={`group overflow-hidden border-0 bg-background/50 transition-all duration-300 hover:shadow-xl ${
        isGridView ? 'h-full' : 'flex h-40'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative overflow-hidden ${isGridView ? 'aspect-square w-full' : 'h-full w-40 shrink-0'}`}>
        <GameImage 
          title={game.title}
          imageUrl={game.imageUrl || defaultImages[game.category] || '/images/default-game.jpg'}
          className={`h-full w-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <a
              href={game.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium transition-colors rounded-md shadow bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              JUGAR AHORA
            </a>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute z-10 right-2 top-2 bg-background/50 backdrop-blur-sm hover:bg-background/80"
          onClick={toggleFavorite}
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
            }`}
          />
          <span className="sr-only">{isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}</span>
        </Button>
      </div>

      <CardContent className={`flex flex-col p-3 ${!isGridView && 'flex-1'}`}>
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold line-clamp-1">{game.title}</h3>
        </div>
        <p className="mb-2 text-xs line-clamp-2 text-muted-foreground">{game.description}</p>
        <div className="mt-auto">
          <Badge variant="outline" className="text-xs capitalize">
            {game.category}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard; 