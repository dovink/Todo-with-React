import React from "react";
import styles from "./AddTodo.module.css";
import { LocalStorageService } from "../Hooks/LocalStorageService";

const AddTodo = ({ Todo, setTodo, AllTodos, setAllTodos }) => {
  const handleOnChangeTodo = (event) => {
    setTodo(event.target.value);
  };
  const handleClickToAdd = () => {
    const newTodo = { text: Todo, isCompleted: false };
    const updatedTodos = [...AllTodos, newTodo];
    setAllTodos(updatedTodos);
    setTodo([]);
  };
  return (
    <div className={styles.input_div}>
      <input
        type="text"
        placeholder="New Todo"
        value={Todo}
        onChange={handleOnChangeTodo}
        className={styles.input_Todo}
      />
      <button className={styles.add_Button} onClick={handleClickToAdd}>
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
