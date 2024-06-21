export const capitalize = (header: string) => {
  return header
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');
};
