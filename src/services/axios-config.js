import axios from "axios";

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzgxMWQ1MTM2OTVlZTc4YWU3NWU0YzU0OGJhYTdiOCIsInN1YiI6IjYwMDE5OWE0YmU0YjM2MDAzZjUxNTY1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nL9JmkGfcEkkjTh88PKz0k7frRc-gtgPV2oGwRnaN_E';


export const axiosConfig = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${ API_KEY }`
    }
});