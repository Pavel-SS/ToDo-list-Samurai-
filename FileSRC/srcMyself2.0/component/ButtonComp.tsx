import React from "react";

type PropsType = {
    id:string
    name:string
    filter: (name:string)=> void
}

export const ButtonComponent = (props:PropsType) => {
    return(
        <button id={props.id}>{props.name}</button>
    )
}