import React from 'react';
import GameCard from '../games/GameCard';

const MainContent = ({ games, isGridView, isLoading }) => {
  return (
    <main className="min-h-screen px-4 pt-24 pb-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div
        className={`container mx-auto ${
          isGridView
            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'
            : 'flex flex-wrap justify-center gap-6'
        }`}
      >
        {isLoading ? (
          // Skeleton loading cards
          [...Array(12)].map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className={`animate-pulse ${
                isGridView ? '' : 'w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]'
              }`}
            >
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <div className="aspect-square bg-white/10" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-white/10 rounded w-3/4" />
                  <div className="h-3 bg-white/10 rounded w-full" />
                  <div className="h-3 bg-white/10 rounded w-2/3" />
                </div>
              </div>
            </div>
          ))
        ) : games.length > 0 ? (
          games.map(game => (
            <div
              key={game.id}
              className={`opacity-0 animate-fadeIn ${
                isGridView ? '' : 'w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]'
              }`}
              style={{
                animationDelay: `${(games.indexOf(game) % 12) * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <GameCard game={game} isGridView={isGridView} />
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold mb-2">No se encontraron juegos</h3>
            <p className="text-gray-400">
              Intenta ajustar los filtros de búsqueda para encontrar más juegos
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent; 