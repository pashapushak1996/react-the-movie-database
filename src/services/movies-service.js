import {axiosInstance} from "./axios-config";


const getMoviesList = async (page, genre = '') => {
    const {data} = await axiosInstance.get(`discover/movie`, {
        params: {
            page: page,
            with_genres: genre
        }
    });
    return data;
};

const getMovieDetails = async (movieId) => {
    const {data} = await axiosInstance.get(`/movie/${ movieId }`);
    return data;
};

const getMoviesByGenres = async (value = '') => {
    const {data} = await axiosInstance.get(`/27/movie/horror`, {
        params: {
            query: value
        }
    });
    return data;
}

export {
    getMoviesByGenres,
    getMoviesList,
    getMovieDetails,
}