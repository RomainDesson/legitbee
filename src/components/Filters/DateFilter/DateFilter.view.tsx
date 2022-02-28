import React from "react";
import { StyledInput } from "../../Searchbar/style";

type DateFilterViewProps = {
    handleValue: (value: React.ChangeEvent<HTMLInputElement>) => void
}

export const DateFilterView = ({ handleValue }: DateFilterViewProps) => {
    return (
        <div>
            <StyledInput onChange={handleValue} placeholder={"Release year"} w={"200"} h={"25"}/>
        </div>
    )
}