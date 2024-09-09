import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import styles from "./DeleteTodo.module.css"

const DeleteTodo = ({AllTodos, setAllTodos, index}) => {
    const handleTodoDelete = () =>{
        const filteredTodos = AllTodos.filter((_, i) => i !== index)
        setAllTodos(filteredTodos);
    }

  return (
    <button className={styles.Delete_button} onClick={handleTodoDelete}><FaRegTrashCan /></button>
  )
}
export default DeleteTodo;
