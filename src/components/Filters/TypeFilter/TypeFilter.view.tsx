import React from "react";

type TypeFilterViewProps = {
    handleValue: (value: React.ChangeEvent<HTMLSelectElement>) => void
}

export const TypeFilterView = ({ handleValue }: TypeFilterViewProps) => {
    return (
        <>
            <span>Filter by type: </span>
            <select onChange={handleValue}>
                <option value={""}>No filter</option>
                <option value={"movie"}>Movies</option>
                <option value={"series"}>Series</option>
            </select>
        </>
    )
}