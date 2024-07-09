import { useEffect, useState } from "react";
import CreateNote from "./create_note";
import { v4 as uuid } from "uuid"
import Notes from "./notes";
import "./style.css"

const Note = () => {

    // saving data in localstorage
    const [notes, setNotes] = useState(() => {
        let data = JSON.parse(localStorage.getItem("mydata"))
        return data || []
    })

    const [inputText, setInputText] = useState("")

    const TextHandler = (e) => {
        setInputText(e.target.value)
    }

    const SaveHandler = () => {
        setNotes((prevState) => [
            ...prevState,
            {
                id: uuid(),
                text: inputText
            }
        ])

        setInputText("")
    }

    // deleteHandle
    const deleteHandler = (id) => {
        const FilterNotes = notes.filter((note) => note.id !== id)
        setNotes(FilterNotes)
    }

    useEffect(() => {
        localStorage.setItem("mydata", JSON.stringify(notes))
    })
    return (
        <>
            <div className="notes">

                {
                    notes.map((item, index) => <Notes key={index} id={item.id} text={item.text} deleteHandler={deleteHandler} />)
                }

                <CreateNote TextHandler={TextHandler} SaveHandler={SaveHandler} inputText={inputText} />
            </div>
        </>
    )
}

export default Note