import React, { useState } from "react";
import './custom.css';

///  material ui components
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';



//////////  component
function ListCom(props) {

  const [line, setLine] = useState(false);

  function cutIt(e) {
    setLine(true);
  }

  return (
    <>
    <div className="todo_style">
      <span className="deleteButton" onClick={cutIt}>
        <DeleteIcon fontSize="medium"  />
      </span>
      <li style={{textDecoration : line ? "line-through" : "none" }}> {props.text} </li>
    </div>
    </>
  );

}



////////// component
function TodoList() {

  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  function itemEvent(event) {
    setItem(event.target.value);
  }

  function add() {
    if(item){
      setNewItem((prev)=>{
        return [...prev, item]
      })
      setItem("");
    }
  }


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>Todo List</h1>
          <div className="fields" >
            <input type="text" placeholder="Add Items..." onChange={itemEvent} value={item} />
            <Button className="button" onClick={add}>
              <AddIcon fontSize='large' />
            </Button>
          </div>
          <ul>
            {
              newItem.map((curVal, index)=>{
                return <ListCom text={curVal} key={index} />;
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}



export default TodoList;