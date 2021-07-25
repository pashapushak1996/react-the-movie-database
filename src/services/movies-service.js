import {axiosConfig} from "./axios-config";

export const getMovies = async () => {
    const {data} = await axiosConfig(`/discover/movie`);
    return data;
};

export const getPopularMovies = async () => {
    const {data} = await axiosConfig(`/movie/popular`);
    return data;
};

export const getUpcomingMovies = async () => {
    const {data} = await axiosConfig(`/movie/upcoming`);
    return data;
};

export const getNowPlayingMovies = async () => {
    const {data} = await axiosConfig(`/movie/now_playing`);
    return data;
};
export const getTopRatedMovies = async () => {
    const {data} = await axiosConfig(`/movie/top_rated`);
    return data;
};