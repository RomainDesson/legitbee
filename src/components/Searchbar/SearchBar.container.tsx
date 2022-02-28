import { SearchBarView } from "./SearchBar.view";
import { useEffect, useState } from "react";
import { useMovies } from "../../contexts/MovieContext/context";
import {SET_MOVIES, SET_NUMBER_OF_MOVIES, UPDATE_MOVIES} from "../../contexts/MovieContext/action";
import axios from "axios";
import { BaseURL } from "../../api";

type SearchBarContainerProps = {
    currentPage: number
    handleCurrentPage: (page: number) => void
}

export const SearchBarContainer = ({ currentPage, handleCurrentPage }: SearchBarContainerProps) => {
    const {state: {movies}} = useMovies()
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
        if (searchedMovie.length >= 3) {
            axios.get(`${BaseURL}s=${searchedMovie}&type=${typeFilter}&y=${dateFilter}&page=${currentPage}`)
                .then((res) => {
                    dispatch({type: SET_MOVIES, payload: res.data.Search})
                    dispatch({type: SET_NUMBER_OF_MOVIES, payload: res.data.totalResults})
                })
                .catch(err => {
                    throw new Error(err)
                })
        }
    }, [searchedMovie, typeFilter, dateFilter])

    useEffect(() => {
        if (currentPage > 1) {
            axios.get(`${BaseURL}s=${searchedMovie}&type=${typeFilter}&y=${dateFilter}&page=${currentPage}`)
                .then((res) => {
                    dispatch({type: UPDATE_MOVIES, payload: res.data.Search})
                })
                .catch(err => {
                    throw new Error(err)
                })
        }
    }, [currentPage])

    const handleTypeFilter = (filter: string) => {
        setTypeFilter(filter)
    }

    const handleDateFilter = (filter: string) => {
        setDateFilter(filter)
    }

    return <SearchBarView handleSearchedMovie={handleSearchedMovie} handleDateFilter={handleDateFilter} handleTypeFilter={handleTypeFilter} />
}