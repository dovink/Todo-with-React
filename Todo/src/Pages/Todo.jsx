import React, { useEffect, useState } from "react";
import AddTodo from "../Components/AddTodo";
import ListOfTodos from "../Components/ListOfTodos";
import styles from "./Todo.module.css";
import DeleteCompletedTodos from "../Components/DeleteCompletedTodos";
import { LocalStorageService } from "../Hooks/LocalStorageService";

const Todo = () => {
  const [Todo, setTodo] = useState([]);
  const [AllTodos, setAllTodos] = useState(() => {
    const localTodos = LocalStorageService.get("Todo", []);
    return localTodos;
  });

  useEffect(() => {
    LocalStorageService.set("Todo", AllTodos);
  }, [AllTodos]);

  return (
    <div className={styles.main_div}>
      <header className={styles.main_header}>Todo List</header>
      <AddTodo
        Todo={Todo}
        setTodo={setTodo}
        AllTodos={AllTodos}
        setAllTodos={setAllTodos}
      />
      <ListOfTodos AllTodos={AllTodos} setAllTodos={setAllTodos} />

      <p className={styles.Todos_Count}>
        All Todos: {AllTodos.length} (Completed:{" "}
        {AllTodos.filter((todo) => todo.isCompleted).length}/Incompleted:{" "}
        {AllTodos.filter((todo) => !todo.isCompleted).length})
      </p>
      <DeleteCompletedTodos AllTodos={AllTodos} setAllTodos={setAllTodos} />
    </div>
  );
};

export default Todo;
