const CreateNote = ({ TextHandler, SaveHandler, inputText }) => {

    const charLimit = 100
    const charLeft = charLimit - inputText.length

    return (
        <>
            <div className="note">
                <div className="my_note">
                    <textarea col="10" rows="5" placeholder="Type...." maxLength={100} value={inputText} onChange={TextHandler}></textarea>
                    <div className="note_footer">
                        <span>{charLeft} Left</span>
                        <button className="note_save" onClick={SaveHandler}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateNote