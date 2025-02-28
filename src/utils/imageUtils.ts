const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://web-production-3239.up.railway.app'
  : 'http://localhost:8080';

export const getImageUrl = (imageUrl: string): string => {
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  
  return `${API_URL}${imageUrl}`;
};

export const getPlaceholderImage = (): string => {
  return '/images/games/placeholder.webp';
};

export const preloadImage = (imageUrl: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = getImageUrl(imageUrl);
    img.onload = () => resolve();
    img.onerror = () => reject();
  });
}; 