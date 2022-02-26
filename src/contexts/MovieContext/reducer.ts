import { Action, SET_MOVIES, SET_NUMBER_OF_MOVIES, UPDATE_MOVIES } from "./action";
import { State } from "./context";

export const moviesReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case SET_MOVIES: {
            return {
                movies: action.payload,
                numberOfMovies: state.numberOfMovies
            }
        }
        case SET_NUMBER_OF_MOVIES: {
            return {
                movies: state.movies,
                numberOfMovies: action.payload
            }
        }
        case UPDATE_MOVIES: {
            return {
                movies: state.movies.concat(action.payload),
                numberOfMovies: state.numberOfMovies
            }
        }
        default:
            return state
    }
};