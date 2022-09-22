import React from 'react';

//////// Material UI icons
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


function CreateNote(props){

    const [note, setNote] = React.useState({
        title : "",
        content : "",
    });

    const [expand, setExpand] = React.useState(false);

    function inputEvent(event) {
        const {name, value} = event.target;
        setNote((previousData)=>{
            return {
                ...previousData,
                [name] : value,
            }
        });
    }

    function addEvent() {
        props.passNote(note);
        setNote({
            title : "",
            content : "",
        })
    }

    function expandIt() {
        setExpand(true);
    }
    function backToNormal(){
        setExpand(false);
    }


    return (
        <>
            <div className='main_note' onDoubleClick={backToNormal} >
                <form autoComplete='off'>

                    {
                        expand ?
                        <input type="text" placeholder="Title" name='title' value={note.title} onChange={inputEvent} />
                        : null
                    }
                    <br />

                    <textarea rows="" column="" placeholder='Write a note..' name='content' value={note.content} onChange={inputEvent} onClick={expandIt}  />

                    {
                        expand ?
                        <Button className="button" onClick={addEvent}>
                            <AddIcon className="plus_sign" />
                        </Button>
                        : null
                    }
                    
                </form>
            </div>
        </>
    )
}

export default CreateNote;