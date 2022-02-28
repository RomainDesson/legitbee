import React from "react";
import ReactDOM from "react-dom";
import {
    CloseButton,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
    ModalWrapper, MovieInfoWrapper, PlotSubWrapper, PlotWrapper,
    PosterWrapper, SectionHeader, SubTitleWrapper, TitleWrapper, VerticalDivider
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
                                    <TitleWrapper>
                                        <ModalTitle>{Title}</ModalTitle>
                                        <SubTitleWrapper>
                                            <span>{Genre}</span>
                                            <span>|</span>
                                            <span>{Director}</span>
                                            <span>|</span>
                                            <span>{Released}</span>
                                        </SubTitleWrapper>
                                    </TitleWrapper>
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
                                    <PlotWrapper>
                                        <SectionHeader>Plot</SectionHeader>
                                        <PlotSubWrapper>{Plot}</PlotSubWrapper>
                                    </PlotWrapper>
                                    <VerticalDivider />
                                    <MovieInfoWrapper>
                                        <SectionHeader>General informations</SectionHeader>
                                        <span>Language : {Language}</span>
                                        <span>Country : {Country}</span>
                                        <span>Box Office : {BoxOffice}</span>
                                        <span>Actors : {Actors}</span>
                                        <SectionHeader>Ratings and awards</SectionHeader>
                                        <span>Awards : {Awards}</span>
                                        <span>Metascore : {Metascore}</span>
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