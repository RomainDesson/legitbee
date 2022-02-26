import {CardWrapper, NoImageFoundWrapper} from "./style";
import {Movie} from "../../types/MoviesType";

type MovieCardViewProps = {
    movie: Movie
}

export const MovieCardView = ({ movie }: MovieCardViewProps) => {
    return (
        <CardWrapper poster={movie.Poster === "N/A" ? "../../../public/statics/images/image-not-found.png" : movie.Poster} >
            {movie.Poster === "N/A" && <NoImageFoundWrapper>{movie.Title}</NoImageFoundWrapper>}
        </CardWrapper>
    )
}