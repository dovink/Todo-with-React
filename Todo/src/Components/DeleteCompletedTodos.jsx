import React from 'react'
import styles from "./DeleteCompletedTodos.module.css"

const DeleteCompletedTodos = ({AllTodos, setAllTodos}) => {
    const handleTodosDelete = () => {
        const newTodos = AllTodos.filter(todo => !todo.isCompleted)
        setAllTodos(newTodos);
    }
  return (
    <button className={styles.delete_button} onClick={handleTodosDelete}>Delete all completed Todos</button>
  )
}

export default DeleteCompletedTodos