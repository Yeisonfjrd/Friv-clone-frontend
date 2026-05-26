import React, { useState } from 'react';
import '../../assets/styles/GameImage.css';

import minecraft from '../../assets/images/games/descarga.webp';
import doom from '../../assets/images/games/Doom.webp';
import mario from '../../assets/images/games/mario.jpg';
import pokemon from '../../assets/images/games/pokemon.jpg';
import sonic from '../../assets/images/games/sonic.jpg';
import pacman from '../../assets/images/games/pacman.webp';
import spaceInvaders from '../../assets/images/games/space-invaders.jpg';
import tetris from '../../assets/images/games/tetris.jpg';
import streetFighter from '../../assets/images/games/street-figther.jpg';
import zelda from '../../assets/images/games/zelda.jpg';
import game2048 from '../../assets/images/games/2048.jpg';
import flappyBird from '../../assets/images/games/flappybird.jpg';
import snake from '../../assets/images/games/snake.jpg';
import chess from '../../assets/images/games/chess.png';
import sudoku from '../../assets/images/games/sudoku.jpg';
import minesweeper from '../../assets/images/games/mine.jpg';
import solitaire from '../../assets/images/games/soliotaire.png';
import wordle from '../../assets/images/games/wordle.png';
import crossyRoad from '../../assets/images/games/crossyroad.jpg';
import cutTheRope from '../../assets/images/games/cutherope.jpg';

const imageMap: { [key: string]: string } = {
  '/images/games/descarga.webp': minecraft,
  '/images/games/Doom.webp': doom,
  '/images/games/mario.jpg': mario,
  '/images/games/pokemon.jpg': pokemon,
  '/images/games/sonic.jpg': sonic,
  '/images/games/pacman.webp': pacman,
  '/images/games/space-invaders.jpg': spaceInvaders,
  '/images/games/tetris.jpg': tetris,
  '/images/games/street-figther.jpg': streetFighter,
  '/images/games/zelda.jpg': zelda,
  '/images/games/2048.jpg': game2048,
  '/images/games/flappybird.jpg': flappyBird,
  '/images/games/snake.jpg': snake,
  '/images/games/chess.png': chess,
  '/images/games/sudoku.jpg': sudoku,
  '/images/games/mine.jpg': minesweeper,
  '/images/games/soliotaire.png': solitaire,
  '/images/games/wordle.png': wordle,
  '/images/games/crossyroad.jpg': crossyRoad,
  '/images/games/cutherope.jpg': cutTheRope
};

interface GameImageProps {
  title: string;
  imageUrl: string;
  className?: string;
  size?: 'thumbnail' | 'full';
}

const GameImage: React.FC<GameImageProps> = ({ 
  title, 
  imageUrl, 
  className = '', 
  size = 'thumbnail' 
}) => {
  const [error, setError] = useState(false);

  const getImagePath = () => {
    return imageMap[imageUrl] || minecraft;
  };

  const handleError = () => {
    console.error(`Error loading image: ${imageUrl}`);
    setError(true);
  };

  return (
    <img
      src={error ? minecraft : getImagePath()}
      alt={title}
      className={`game-image ${size} ${className}`}
      loading="lazy"
      onError={handleError}
    />
  );
};

export default GameImage; 