import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ task, editTodo, deleteTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      
      <div className="todo-task">
        <p
          className={task.completed ? "completed" : null}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
      </div>

      <div className="icons">
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>

    </div>
  );
};

export default Todo;
