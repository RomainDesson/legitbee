import React from "react";
import {FiltersNAmeWrapper, FilterTag} from "./style";

type TypeFilterViewProps = {
    handleValue: (type: string) => void
    activeFilter: string
}

export const TypeFilterView = ({ handleValue, activeFilter }: TypeFilterViewProps) => {
    return (
        <FiltersNAmeWrapper>
            <FilterTag isActive={activeFilter === ""} onClick={() => handleValue("")}>All</FilterTag>
            <span>|</span>
            <FilterTag isActive={activeFilter === "movie"} onClick={() => handleValue("movie")}>Movies</FilterTag>
            <span>|</span>
            <FilterTag isActive={activeFilter === "series"} onClick={() => handleValue("series")}>Series</FilterTag>
        </FiltersNAmeWrapper>
    )
}