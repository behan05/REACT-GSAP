import React, { useState } from 'react';
import style from "../styles/btn.module.css";
import { newTodo, removeTodo } from "../features/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function Todo() {

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todos);

  const [newTask, setNewTask] = useState([]);
  const [currentData, setCurrentData] = useState('');

  const formHandler = (e) => {
    e.preventDefault();

    if (currentData.trim() === "") {
      alert("please enter data before store task!");
      return;
    }

    else {
      // Update local state
      setNewTask([...newTask, currentData]);

      // Dispatch new task to Redux store
      dispatch(newTodo({ task: currentData }));

      // Clear input field
      setCurrentData("");
    }

  }

  return (
    <>
      <form onSubmit={formHandler}>
        <input type="text" value={currentData} placeholder='add task' onChange={(e) => setCurrentData(e.target.value)} />

        <button type='submit' className={style.btn}>Store Task</button>
      </form>


      <div>
        <h1>your Todos : </h1>
        <ul>
          {selector.map((element, index) => {
            return (<>
              <li key={index}><h2>TASK: {element.task}</h2></li>
              <button onClick={() => dispatch(removeTodo(element.id))}>Delete</button>
            </>)
          })}
        </ul>
      </div>
    </>
  )
}

export default Todo;