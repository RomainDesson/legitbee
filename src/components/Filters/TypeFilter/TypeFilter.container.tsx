import React from "react"
import { TypeFilterView } from "./TypeFilter.view";

type TypeFilterContainerProps = {
    handleTypeFilter: (filter: string) => void
}

export const TypeFilterContainer = ({ handleTypeFilter }: TypeFilterContainerProps) => {
    const handleValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleTypeFilter(event.target.value)
    }

    return <TypeFilterView handleValue={handleValue} />
}