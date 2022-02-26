import { SearchBarContainer } from "../../components/Searchbar/SearchBar.container";
import { MovieCardContainer } from "../../components/MovieCard/MovieCard.container";
import { MovieCardWrapper } from "./style";
import { Movies } from "../../types/MoviesType";
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
        console.log(windowHeight)
    }, [movies])

    const getClientHeight = () => {
        console.log(window.scrollY)
        if (scrollY < 60) {
            handleCurrentPage(1)
            console.log(windowHeight, ref.current.clientHeight)
        }
        if ((window.scrollY + 1300) >= windowHeight && currentPage < numberOfPages ) {
            handleCurrentPage(currentPage + 1)
        }
    }

    return (
        <div ref={ref} className={"div"}>
            <SearchBarContainer currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
            <InfiniteScroll
                dataLength={numberOfMovies}
                next={() => {}}
                hasMore={true}
                loader={<span>Start typing to search</span>}
                hasChildren
                onScroll={getClientHeight}
                scrollThreshold={`${windowHeight}px`}
            >
                <MovieCardWrapper>
                    {movies && movies.map(movie => {
                        return <MovieCardContainer movie={movie} key={movie.imdbID}/>
                    })}
                </MovieCardWrapper>
            </InfiniteScroll>
        </div>
    )
}