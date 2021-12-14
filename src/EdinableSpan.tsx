import React, {useState, ChangeEvent} from "react";


type EdinableSpanPropsType ={
    title: string
    titleChange: (newTitle: string) => void
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
        ? <input value ={title} autoFocus={true} onBlur={offEditeMode} onChange={changeTitle}/>
        : <span onDoubleClick={onEditeMode}>{props.title}</span>
    )
}

export default EdinableSpan;