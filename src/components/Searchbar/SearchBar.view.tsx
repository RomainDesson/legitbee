import { SearchBarWrapper, SearchSectionWrapper, StyledInput } from "./style";

type SearchBarViewProps = {
    handleSearchedMovie: (movie: string) => void
}

export const SearchBarView = ({ handleSearchedMovie }: SearchBarViewProps) => {
    return (
        <SearchSectionWrapper>
            <SearchBarWrapper>
                <span>Search: </span>
                <StyledInput
                    type={"search"}
                    onChange={e => handleSearchedMovie(e.target.value)}
                />
            </SearchBarWrapper>
        </SearchSectionWrapper>
    )
}