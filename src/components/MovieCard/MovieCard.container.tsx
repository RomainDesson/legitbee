import { MovieCardView } from "./MovieCard.view";
import { Movie } from "../../types/MoviesType";

type MovieCardContainerProps = {
    movie: Movie
}

export const MovieCardContainer = ({ movie }: MovieCardContainerProps) => {
    return <MovieCardView movie={ movie }/>
}