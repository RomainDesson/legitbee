import { SearchBarContainer } from "../../components/Searchbar/SearchBar.container";
import { MovieCardContainer } from "../../components/MovieCard/MovieCard.container";
import {EnjoyWrapper, HomeWrapper, MovieCardWrapper, NoMovieCardWrapper, TipsWrapper} from "./style";
import { useMovies } from "../../contexts/MovieContext/context";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export const HomePageView = () => {
    const { state: { movies, numberOfMovies }} = useMovies()
    const [currentPage, setCurrentPage] = useState(1)
    const [windowHeight, setWindowHeight] = useState(0)
    const ref = useRef(null)

    const handleCurrentPage = (page: number) => {
        setCurrentPage(page)
    }

    const numberOfPages = Math.ceil(numberOfMovies / 10)

    useEffect(() => {
        setWindowHeight(ref.current.clientHeight)
    }, [movies])

    const getClientHeight = () => {
        if (scrollY < 60) {
            handleCurrentPage(1)
        }
        if ((window.scrollY + 1300) >= windowHeight && currentPage < numberOfPages && movies.length > 0 ) {
            handleCurrentPage(currentPage + 1)
        }
    }
    console.log(movies)
    return (
        <HomeWrapper ref={ref} className={"div"} movies={movies.length > 0}>
            <SearchBarContainer currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
            <InfiniteScroll
                dataLength={numberOfMovies}
                next={() => {}}
                hasMore={true}
                loader={<span></span>}
                hasChildren
                onScroll={getClientHeight}
                scrollThreshold={`${windowHeight}px`}
            >
                {movies.length > 0 ?
                <MovieCardWrapper>
                    {movies && movies.map(movie => {
                        return <MovieCardContainer movie={movie} key={movie.imdbID}/>
                    })}
                </MovieCardWrapper> :
                <NoMovieCardWrapper>
                    <TipsWrapper>
                        <span>"You can filter by the type"</span>
                        <span>"And also by the release date"</span>
                    </TipsWrapper>
                    <EnjoyWrapper>
                        <br />
                        <span>Start typing to find the movie you will see tonight.</span>
                        <span>Enjoy it :)</span>
                    </EnjoyWrapper>
                </NoMovieCardWrapper>
                }
            </InfiniteScroll>
        </HomeWrapper>
    )
}