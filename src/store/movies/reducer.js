import { SET_MOVIES, SET_SEARCH_MOVIES, SET_DETAILS_MOVIE} from "./types";

const initialState={
    popular:[],
    search:[],
    details:{},
};

const movies = (state = initialState, action)=>{
    switch (action.type){
        case SET_MOVIES:
            return {
                ...state,
                popular:action.payload
            }
        case SET_SEARCH_MOVIES:
            return {
            ...state,
            search: action.payload
        }
        case SET_DETAILS_MOVIE:
            return {
            ...state,
            details: action.payload
        }
        default:
          return state;
    }
}

export default movies;