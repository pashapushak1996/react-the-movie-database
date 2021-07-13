const imageUrlCreator = (imageUrl, width) => {
    let url = `https://image.tmdb.org/t/p/w${ width }${ imageUrl }`;
    if (!width) {
        url = `https://image.tmdb.org/t/p/original${ imageUrl }`
    }
    return url;
};

const dateToString = (string) => {
    let [month, day, year] = new Date(string).toDateString().split(' ').splice(1, 3);
    return [day, month, year].join(' ');
};

export const genreToClassName = (genre) => genre.name.replaceAll(' ', '').toLowerCase();

export {
    imageUrlCreator,
    dateToString
}