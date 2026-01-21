import React, { useEffect, useState } from "react";
import "./todoPlanner.css";

const TodoPlanner = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Load
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("study_todos")) || [];
    setTodos(saved);
  }, []);

  // Save
  useEffect(() => {
    localStorage.setItem("study_todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        task,
        completed: false,
      },
    ]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="todo-section">
      <h2>📝 Plan To-Do’s</h2>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Add new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`todo-item ${todo.completed ? "done" : ""}`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.task}</span>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoPlanner;
