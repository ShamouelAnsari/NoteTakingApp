const Notes = ({ id, text, deleteHandler }) => {
    return (
        <>
            <div className="note">
                <div>{text}</div>
                <button className="del_btn" onClick={() => deleteHandler(id)}>Delete</button>
            </div>
        </>
    )
}

export default Notes