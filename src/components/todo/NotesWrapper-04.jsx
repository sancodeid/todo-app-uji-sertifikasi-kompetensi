import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditForm from "./EditNotes-04";
import TodoForm from "./NotesForm-04";
import Todo from "./Notes-04";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const updateLocalStorage = (newTodo) => {
    setTodos(newTodo);
    localStorage.setItem("todo", JSON.stringify(newTodo));
  };

  useEffect(() => {
    const getTodo = JSON.parse(localStorage.getItem("todo")) || [];
    setTodos(getTodo);
  }, []);

  const addTodo = (todo) => {
    const newTodo = [
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ];
    updateLocalStorage(newTodo);
  };

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    updateLocalStorage(newTodo);
  };

  const toggleComplete = (id) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    updateLocalStorage(newTodo);
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (id, task) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    updateLocalStorage(newTodo);
  };

  return (
    <div className="TodoWrapper">
      <h3 className="todos-title">TodoList</h3>
      <TodoForm addTodo={addTodo} />
      <div className="todo-lists">
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditForm key={index} task={todo} editTodo={editTask} />
          ) : (
            <Todo
              key={index}
              task={todo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TodoWrapper;
