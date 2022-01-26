import React, {ChangeEvent, KeyboardEvent} from "react";

type PropsType = {
    name: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void
}

export const Input = (props:PropsType) => {
    return (
        <input 
            value={props.name}  
            onChange = {props.onChange} 
            onKeyPress={props.onKeyPress}/>
    )
}

