import { SearchBarContainer } from "../../components/Searchbar/SearchBar.container";
import { MovieCardContainer } from "../../components/MovieCard/MovieCard.container";
import { useMovies } from "../../contexts/MovieContext/context";
import { MovieCardWrapper } from "./style";

export const HomePageView = () => {
    const {state:{ movies }} = useMovies()

    return (
        <>
            <SearchBarContainer />
            <MovieCardWrapper>
                {movies && movies.map(movie => {
                    return <MovieCardContainer movie={ movie } key={ movie.imdbID }/>
                })}
            </MovieCardWrapper>
        </>
    )
}