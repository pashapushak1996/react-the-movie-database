const imageUrlCreator = (imageUrl, width) => `https://image.tmdb.org/t/p/w${ width }${ imageUrl }`;

const dateToString = (string) => {
    const [month, day, year] = new Date(string).toDateString().split(' ').splice(1, 3);
    return [day, month, year].join(' ');
};


export {
    imageUrlCreator,
    dateToString
}