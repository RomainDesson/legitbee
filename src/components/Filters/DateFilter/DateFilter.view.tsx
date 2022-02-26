import React from "react";

type DateFilterViewProps = {
    handleValue: (value: React.ChangeEvent<HTMLInputElement>) => void
}

export const DateFilterView = ({ handleValue }: DateFilterViewProps) => {
    return (
        <div>
            <span>Release date:</span>
            <input onChange={handleValue} />
        </div>
    )
}