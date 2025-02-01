import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([
      ...todos,
      { id: uuidv4(), task, completed: false, isEditing: false },
    ]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEditing = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  };

  const editTask = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Manage Your Tasks</h1>
      <div className="todo-input-box">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="todo-input"
        />
        <button onClick={addTask} className="todo-add-btn">
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(todo.id)}
              className="todo-checkbox"
            />
            {todo.isEditing ? (
              <>
                <input
                  type="text"
                  defaultValue={todo.task}
                  onBlur={(e) => editTask(todo.id, e.target.value)}
                  className="todo-edit-input"
                  autoFocus
                />
                <button
                  onClick={(e) =>
                    editTask(todo.id, e.target.previousSibling.value)
                  }
                  className="todo-submit-btn"
                >
                  ✅
                </button>
              </>
            ) : (
              <span
                className={`todo-task ${
                  todo.completed ? "todo-completed" : ""
                }`}
                onClick={() => toggleCompletion(todo.id)}
              >
                {todo.task}
              </span>
            )}
            <div className="todo-actions">
              {!todo.isEditing && !todo.completed && (
                <button
                  onClick={() => startEditing(todo.id)}
                  className="todo-edit-btn"
                >
                  ✏️
                </button>
              )}
              <button
                onClick={() => deleteTask(todo.id)}
                className="todo-delete-btn"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
