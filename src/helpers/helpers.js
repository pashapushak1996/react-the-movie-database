const imageUrlCreator = (width, imageUrl) => `https://image.tmdb.org/t/p/w${ width }${ imageUrl }`;

const yearCreator = (string) => string.split('').splice(0, 4).join('');

export {
    imageUrlCreator,
    yearCreator
}