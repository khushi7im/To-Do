import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function ToDo() {
  let item = {
    padding: "8px",
    margin: "8px",
  };

  let inpStyle = {
    padding: "9px",
  };
  let buttonDel = {
    margin: "3px 7px",
    padding: "2px 5px",
    borderRadius: "0px",
  };

  let [todos, setTodos] = useState([]);
  let [task, setTask] = useState("");

  let taskAdd = () => {
    console.log("added");
    setTodos((prevTodo) => {
      return [...prevTodo, { Task: task, id: uuidv4() }];
    });

    setTask(""); // clear input after adding text
  };

  let updateTask = (event) => {
    // console.log(event.target.value);
    setTask(event.target.value);
  };

  let ButtonDel = (id) => {
    console.log("del", id);
    setTodos(todos.filter((i) => i.id != id));
    // let copy = todos.filter((i) => i.id != id);
    // console.log(copy);
  };
  let upperAll = () => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          Task: todo.Task.toUpperCase(),
        };
      })
    );
  };

  return (
    <>
      <div>
        <div style={item}>
          <input
            type="text"
            placeholder="Enter Task"
            value={task}
            onChange={updateTask}
            style={inpStyle}
          />
          &nbsp; &nbsp; &nbsp;
          <button onClick={taskAdd} type="submit">
            Add
          </button>
          <br />
          <br />
        </div>
        <br />
        <div style={item}>
          <ul>
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <span>{todo.Task}</span>
                  <button style={buttonDel} onClick={() => ButtonDel(todo.id)}>
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <br />
        <button onClick={upperAll}>Set to Uppercase All</button>
      </div>
    </>
  );
}
