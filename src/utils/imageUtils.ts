export const getImageUrl = (imageUrl: string): string => {
  const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';
  
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  
  return `${baseUrl}${imageUrl}`;
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