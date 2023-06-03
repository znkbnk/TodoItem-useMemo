import React, { useState, useMemo } from 'react';

function TodoItem({ id, title, completed, handleCheckboxChange }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleCheckboxChange(id)}
      />
      <span>{title}</span>
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a Todo App', completed: true },
    { id: 3, title: 'Deploy to production', completed: false },
  ]);

  const completedTodos = useMemo(() => {
    return todos.filter((todo) => todo.completed);
  }, [todos]);

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
      <h2>Completed Todos:</h2>
      {completedTodos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}

export default TodoList;
