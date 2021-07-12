import {axiosInstance} from "./axios-config";
//Action-types

const SET_GENRES = "SET_GENRES";


//Action creators

const setGenres = (payload) => ({type: SET_GENRES, payload});


const getGenres = async () => {
    const {data} = await axiosInstance.get(`/genre/movie/list`);
    return data
};

export {
    getGenres
}

export const setGenresThunk = () => async (dispatch) => {
    const genres = await getGenres();
    dispatch(setGenres(genres));
}