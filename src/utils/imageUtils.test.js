import { getImageUrl } from './imageUtils';

test('leaves absolute URLs untouched', () => {
  expect(getImageUrl('https://cdn.example.com/doom.webp')).toBe('https://cdn.example.com/doom.webp');
});

test('prefixes relative paths with the API host', () => {
  // NODE_ENV is "test" under Jest, so this resolves to the local backend
  expect(getImageUrl('/images/games/Doom.webp')).toBe('http://localhost:8080/images/games/Doom.webp');
});
