import { useState } from "react";

const EditForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      editTodo(task.id, value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        className="todo-input"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Edit your task"
      />
      <button className="todo-btn-edit" type="submit">
        Edit
      </button>
    </form>
  );
};

export default EditForm;
