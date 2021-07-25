const imageUrlCreator = (imageUrl, width) => `https://image.tmdb.org/t/p/w${ width }${ imageUrl }`;

const dateToString = (string) => {
    const [month, day, year] = new Date(string).toDateString().split(' ').splice(1, 3);
    return `${ month } ${ day }, ${ year }`;
};
const dateToSortValue = (date) => {
    return date.split('-').join('');
}


export {
    imageUrlCreator,
    dateToString,
    dateToSortValue
}