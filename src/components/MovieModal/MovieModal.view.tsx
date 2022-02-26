import React from "react";
import ReactDOM from "react-dom";
import {
    CloseButton,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
    ModalWrapper, MovieInfoWrapper,
    PosterWrapper
} from "./style";
import {MovieInfo} from "../../types/MoviesType";

type MovieModalViewProps = {
    movieInfos: MovieInfo
    isShowing: boolean
    hideModal: () => void
}

export const MovieModalView = ({ movieInfos, isShowing, hideModal }: MovieModalViewProps) => {
    const { Actors, Awards, BoxOffice, Country, Director, Genre, Language, Metascore, Plot, Ratings, Released, Title } = movieInfos
    return (
        isShowing
            ? ReactDOM.createPortal(
                <>
                    <ModalOverlay>
                        <ModalWrapper>
                            <ModalContent>
                                <ModalHeader>
                                    <ModalTitle>{Title}</ModalTitle>
                                    <button
                                        type="button"
                                        className="modal-close-button"
                                        onClick={hideModal}
                                    >
                                        <CloseButton>&times;</CloseButton>
                                    </button>
                                </ModalHeader>
                                <ModalBody>
                                    <PosterWrapper>
                                        <img src={movieInfos.Poster === "N/A" ? "" : movieInfos.Poster} />
                                    </PosterWrapper>
                                    <MovieInfoWrapper>
                                        <span>Genre : {Genre}</span>
                                        <span>Director : {Director}</span>
                                        <span>Released: {Released}</span>
                                        <span>Language : {Language}</span>
                                        <span>Country : {Country}</span>
                                        <span>Plot : {Plot}</span>
                                        <span>Awards : {Awards}</span>
                                        <span>Metascore : {Metascore}</span>
                                        <span>Box Office : {BoxOffice}</span>
                                        <span>Actors : {Actors}</span>
                                        {Ratings.map((rating) => {
                                            return <span key={rating.Source}>{rating.Source} : {rating.Value}</span>
                                        })}
                                    </MovieInfoWrapper>
                                </ModalBody>
                            </ModalContent>
                        </ModalWrapper>
                    </ModalOverlay>

                </>,
                document.body
            )
            : null
    )
}