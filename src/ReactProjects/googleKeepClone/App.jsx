import React from 'react';
import "./custom.css";

////////// components 
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from "./Note";


function App(){
  
  const [addItem, setAddItem] = React.useState([]);

  function addNote(note) {
    setAddItem((prev)=>{
      return [...prev, note];
    })
  }

  function onDelete(id) {
    setAddItem((oldData)=>{
      return oldData.filter((currdata, index)=>{
        return index !== id;
      })
    })
  }


  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className='notes'>
        {
          addItem.map((val, index)=>{
            return <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
             />
          })
        }
      </div>
      <Footer />
    </>
  )
}

export default App;