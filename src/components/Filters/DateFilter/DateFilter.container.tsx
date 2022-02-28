import React from "react"
import { DateFilterView } from "./DateFilter.view";

type DateFilterContainerProps = {
    handleDateFilter: (date: string) => void
}

export const DateFilterContainer = ({ handleDateFilter }: DateFilterContainerProps) => {
    const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length === 0) {
            handleDateFilter(event.target.value)
        }
        if (event.target.value.length === 4) {
            handleDateFilter(event.target.value)
        }
    }
    return <DateFilterView handleValue={handleValue} />
}