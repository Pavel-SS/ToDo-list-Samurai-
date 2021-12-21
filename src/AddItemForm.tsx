import { IconButton } from "@mui/material";
import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
type AddItemFormPropsType = {
    addItem: (title: string) => void
}

const AddItemForm = (props: AddItemFormPropsType) => {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }

    const addItem = () => {
        const trimmedTitle = title.trim()
            if(trimmedTitle){
                props.addItem(trimmedTitle)
            } else {
                setError(true)
            }
        setTitle("")
    }

    const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            addItem();
        }
    }

    const errorClass = error ? "error" : "" ;
    const errorMessage = <div style={{color: "red"}}>Title is required!</div>

    return (
        <div>
        <input
            value={title}
            onChange={changeTitle}
            onKeyPress={onKeyPressAddItem}
            className={errorClass}
        />
        <IconButton onClick={addItem}><ControlPointIcon/></IconButton>
        {error && errorMessage}
    </div>
    )
}

export default AddItemForm;