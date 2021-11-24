 import React from "react";

type PropsType = {
    name: string
    callBack: () => void
}

export const ButtonComponent = (props: PropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return(
        <button onClick={onClickHandler }> {props.name} </button>
    )
}