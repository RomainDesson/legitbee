import React from "react"
import { createContext } from "react";
import { moviesReducer } from "./reducer";
import { Movies } from "../../types/MoviesType";
import { Action } from "./action";

type Dispatch = (action: Action) => void;
export type State = { movies: Movies, numberOfMovies: number };
type CountProviderProps = { children: React.ReactNode };

export const initialState: State = {
    movies: [],
    numberOfMovies: 0
}

export const MovieContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

export const MoviesProvider = ({ children }: CountProviderProps) => {
    const [state, dispatch] = React.useReducer(moviesReducer, initialState);

    const value = { state, dispatch };
    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

export const useMovies = () => {
    const context = React.useContext(MovieContext);
    if (context === undefined) {
        throw new Error("useMovies must be used within a UserProvider");
    }
    return context;
};