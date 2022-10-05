import React from 'react'
import Task from "./Task"

const Tasks = ( {tasks, onDelete, onToggle}) => {
  return (
    //when you use .map, it create a list so the parent of the list should always have a key.
    //we will loop through then output the component and pass in every task as a component
    <>
    {tasks.map( (task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
    ))}
    </>
  )
}

export default Tasks