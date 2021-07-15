const imageUrlCreator = (imageUrl, width) => `https://image.tmdb.org/t/p/w${ width }${ imageUrl }`;

const dateToString = (string) => {
    const [month, day, year] = new Date(string).toDateString().split(' ').splice(1, 3);
    return [day, month, year].join(' ');
};

const dynamicBackgroundImageForElement = (url) => ({
    backgroundImage: `url("${ imageUrlCreator(url, 500) }")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
});

const genreToClassName = (genre) => genre.name.replaceAll(' ', '').toLowerCase();

export {
    dynamicBackgroundImageForElement,
    imageUrlCreator,
    dateToString,
    genreToClassName
}