import {axiosConfig} from "./axios-config";

export const getMovies = async () => {
    const {data} = await axiosConfig(`/discover/movie`);
    return data;
};