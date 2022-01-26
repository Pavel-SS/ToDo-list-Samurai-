import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { IconButton, TextField } from "@mui/material";

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


    return (
        <div>
        <TextField
            value={title}
            onChange={changeTitle}
            onKeyPress={onKeyPressAddItem}
            variant={'outlined'}
            label={'Title'}
            size={'small'}
            sx={{
                maxWidth:'calc(100% - 50px)'
            }}
            error={error}
            helperText={error && 'Title is required!'}
        />
        <IconButton onClick={addItem} sx={{color:'#0288d1'}}>
            <AddBoxRoundedIcon/>
        </IconButton>
    </div>
    )
}

export default AddItemForm;