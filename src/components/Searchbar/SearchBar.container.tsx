import { SearchBarView } from "./SearchBar.view";
import { useEffect, useState } from "react";
import { useMovies } from "../../contexts/MovieContext/context";
import { SET_MOVIES, SET_NUMBER_OF_MOVIES } from "../../contexts/MovieContext/action";
import axios from "axios";
import { BaseURL } from "../../api";

export const SearchBarContainer = () => {
    const [searchedMovie, setSearchedMovie] = useState("")
    const [typeFilter, setTypeFilter] = useState("")
    const [dateFilter, setDateFilter] = useState("")
    const { dispatch } = useMovies()

    const handleSearchedMovie = (movie: string) => {
        setSearchedMovie(movie)
    }

    useEffect(() => {
        if (searchedMovie.length < 3) {
            dispatch({type: SET_MOVIES, payload: []})
        }
        if (searchedMovie.length >= 3 ) {
            axios.get(`${BaseURL}s=${searchedMovie}&type=${typeFilter}&y=${dateFilter}`)
                .then((res) => {
                    dispatch({type: SET_MOVIES, payload: res.data.Search})
                    dispatch({type: SET_NUMBER_OF_MOVIES, payload: res.data.totalResults})
                })
                .catch(err => {
                    throw new Error(err)
                })
        }
    }, [searchedMovie, typeFilter, dateFilter])

    const handleTypeFilter = (filter: string) => {
        setTypeFilter(filter)
    }

    const handleDateFilter = (filter: string) => {
        setDateFilter(filter)
    }

    return <SearchBarView handleSearchedMovie={handleSearchedMovie} handleDateFilter={handleDateFilter} handleTypeFilter={handleTypeFilter}/>
}