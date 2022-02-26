import { MovieCardView } from "./MovieCard.view";
import { Movie } from "../../types/MoviesType";
import {useModal} from "../../hooks/useModal";
import {useState} from "react";
import axios from "axios";
import {BaseURL} from "../../api";

type MovieCardContainerProps = {
    movie: Movie
}

export const MovieCardContainer = ({ movie }: MovieCardContainerProps) => {
    const { isShowing, toggle } = useModal();
    const [moviesInfo, setMovieInfo] = useState()

    const toggleModal = async () => {
        const { data } = await axios.get(`${BaseURL}i=${movie.imdbID}`)
            .catch(err => {
            throw new Error(err)
        })
        setMovieInfo(data)
        toggle()
    }
    return <MovieCardView movie={ movie } isShowing={isShowing} showModal={toggleModal} movieInfos={moviesInfo} toggleModal={toggle}/>
}