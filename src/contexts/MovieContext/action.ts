import { Movies } from "../../types/MoviesType";

export const SET_MOVIES = "SET_MOVIES"
export const SET_NUMBER_OF_MOVIES = "SET_NUMBER_OF_MOVIES"
export const UPDATE_MOVIES = "UPDATE_MOVIES"

export type Action =
    { type: "SET_MOVIES", payload: Movies }
    | { type: "SET_NUMBER_OF_MOVIES", payload: number }
    | { type: "UPDATE_MOVIES", payload: Movies }
