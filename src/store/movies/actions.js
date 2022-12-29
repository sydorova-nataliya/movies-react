import { SET_MOVIES, SET_SEARCH_MOVIES, SET_DETAILS_MOVIE } from "./types";

export const setMovies = (payload) =>({
    type:SET_MOVIES,
    payload
});
export const setSeacrhMovies = (payload) =>({
    type:SET_SEARCH_MOVIES,
    payload
});
export const setDetailsMovie = (payload) =>({
    type:SET_DETAILS_MOVIE,
    payload
});
