import { TextField } from "@mui/material";
import React, {useState, ChangeEvent} from "react";


type EdinableSpanPropsType ={
    title: string
    titleChange: (newTitle: string) => void
    classSpan?: string
}
const EdinableSpan = (props: EdinableSpanPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] =useState<string>(props.title)
    const onEditeMode = () => {
        setEditMode(true)
    }
    const offEditeMode = () => {
        setEditMode(false)
        props.titleChange(title)
    }
    const changeTitle =(e: ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
    }
    return(
        editMode 
        ? <TextField value ={title}
            autoFocus={true} 
            onBlur={offEditeMode}
            onChange={changeTitle}
            fullWidth
          />
        : <div onDoubleClick={onEditeMode} className={props.classSpan}>
            {props.title}
          </div>
    )
}

export default EdinableSpan;