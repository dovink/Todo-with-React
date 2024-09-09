import React from "react";
import DeleteTodo from "./DeleteTodo";
import styles from "./ListOfTodos.module.css";

const ListOfTodos = ({ AllTodos, setAllTodos }) => {
  const toggleTodo = (index) => {
    const newTodos = [...AllTodos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setAllTodos(newTodos);
  };

  return (
    <div>
      <ul className={styles.Todo_list}>
        {AllTodos.map((todo, index) => (
          <li className={styles.List_item} key={index}>
            <input
              type="checkbox"
              onChange={() => toggleTodo(index)}
              checked={todo.isCompleted}
              className={styles.checkbox}
            />
            <span
              className={`${styles.item_span} ${
                todo.isCompleted
                  ? styles.todo_Completed
                  : styles.todo_Incompleted
              }`}
            >
              {todo.isCompleted ? `DONE: ${todo.text}` : `TODO: ${todo.text}`}
            </span>
            <DeleteTodo
              AllTodos={AllTodos}
              setAllTodos={setAllTodos}
              index={index}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfTodos;
