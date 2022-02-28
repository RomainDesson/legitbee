import {CardWrapper, MovieTitleWrapper, NoImageFoundWrapper} from "./style";
import {Movie, MovieInfo} from "../../types/MoviesType";
import {MovieModalContainer} from "../MovieModal/MovieModal.container";

type MovieCardViewProps = {
    movie: Movie
    movieInfos: MovieInfo | undefined
    isShowing: boolean
    showModal: () => void
    toggleModal: () => void
}

export const MovieCardView = ({ movie, movieInfos, isShowing, showModal, toggleModal }: MovieCardViewProps) => {
    return (
        <>
            <CardWrapper poster={movie.Poster === "N/A" ? "../../../public/statics/images/image-not-found.png" : movie.Poster} onClick={showModal}>
                {movie.Poster === "N/A" ? <NoImageFoundWrapper>{movie.Title}</NoImageFoundWrapper> :
                    <MovieTitleWrapper className={"movie-title-wrapper"}><div>{movie.Title}</div></MovieTitleWrapper>
                }
            </CardWrapper>
            {movieInfos && <MovieModalContainer isShowing={isShowing} toggleModal={toggleModal} movieInfos={movieInfos}/>}
        </>
    )
}