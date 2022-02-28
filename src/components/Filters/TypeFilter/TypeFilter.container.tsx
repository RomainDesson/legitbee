import React, {useState} from "react"
import { TypeFilterView } from "./TypeFilter.view";

type TypeFilterContainerProps = {
    handleTypeFilter: (filter: string) => void
}

export const TypeFilterContainer = ({ handleTypeFilter }: TypeFilterContainerProps) => {
    const [activeFilter, setActiveFilter] = useState("")

    const handleValue = (type: string) => {
        handleTypeFilter(type)
        setActiveFilter(type)
    }

    return <TypeFilterView handleValue={handleValue} activeFilter={activeFilter}/>
}