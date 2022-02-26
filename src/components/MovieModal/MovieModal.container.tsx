import {MovieModalView} from "./MovieModal.view";
import {MovieInfo} from "../../types/MoviesType";

type MovieModalContainerProps = {
    movieInfos: MovieInfo
    isShowing: boolean
    toggleModal: () => void
}

export const MovieModalContainer = ({ movieInfos, isShowing, toggleModal }: MovieModalContainerProps) => {
    if (!movieInfos) {
        return null
    }


    return <MovieModalView movieInfos={movieInfos} isShowing={isShowing} hideModal={toggleModal} />
}