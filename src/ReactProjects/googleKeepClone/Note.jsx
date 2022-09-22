import React from "react";

//////// Material UI icons
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

    function deleteNote() {
        props.deleteItem(props.id);
    }

    return (
        <>
            <div className="note">
                <h3> {props.title} </h3>
                <p> {props.content} </p>
                <button className="btn" onClick={deleteNote}>
                    <DeleteIcon className="deleteIcon" />
                </button>
            </div>
        </>
    )
}

export default Note;