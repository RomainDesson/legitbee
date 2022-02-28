import { FilterWrapper, SearchBarWrapper, SearchSectionWrapper, StyledInput } from "./style";
import { DateFilterContainer } from "../Filters/DateFilter/DateFilter.container";
import { TypeFilterContainer } from "../Filters/TypeFilter/TypeFilter.container";

type SearchBarViewProps = {
    handleSearchedMovie: (movie: string) => void
    handleDateFilter: (date: string) => void
    handleTypeFilter: (type: string) => void
}

export const SearchBarView = ({ handleSearchedMovie, handleDateFilter, handleTypeFilter }: SearchBarViewProps) => {
    return (
        <SearchSectionWrapper>
            <SearchBarWrapper>
                <StyledInput
                    type={"search"}
                    onChange={e => handleSearchedMovie(e.target.value)}
                    data-testid={"searchbar-input"}
                    placeholder={"Search"}
                />
                <TypeFilterContainer handleTypeFilter={handleTypeFilter} />
            </SearchBarWrapper>
            <FilterWrapper>
                <DateFilterContainer handleDateFilter={handleDateFilter} />
            </FilterWrapper>
        </SearchSectionWrapper>
    )
}