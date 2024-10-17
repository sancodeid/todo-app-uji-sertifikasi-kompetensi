import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
    }
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        className="todo-input"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Add your task"
      />
      <button className="todo-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
