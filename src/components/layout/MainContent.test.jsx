import { render, screen } from '@testing-library/react';
import MainContent from './MainContent';

jest.mock('../games/GameCard', () => ({ game }) => <div data-testid="game-card">{game.title}</div>);

const games = [
  { id: 1, title: 'Doom' },
  { id: 2, title: 'Tetris' },
];

test('shows 12 skeleton cards while loading', () => {
  const { container } = render(<MainContent games={[]} isGridView isLoading />);
  expect(container.querySelectorAll('.animate-pulse')).toHaveLength(12);
  expect(screen.queryByTestId('game-card')).toBeNull();
});

test('renders one card per game', () => {
  render(<MainContent games={games} isGridView isLoading={false} />);
  expect(screen.getAllByTestId('game-card').map(c => c.textContent)).toEqual(['Doom', 'Tetris']);
});

test('shows the empty state when the filters match nothing', () => {
  render(<MainContent games={[]} isGridView isLoading={false} />);
  expect(screen.getByText('No se encontraron juegos')).toBeInTheDocument();
});
