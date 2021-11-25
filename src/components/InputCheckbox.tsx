import React from "react";

type PropsType = {
    checked: boolean
}

export const InputCheckbox = (props: PropsType) => {
    return (
        <input 
            type="checkbox" 
            checked={props.checked}
        />
    )
}