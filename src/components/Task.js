import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
const Task = ({task,onDelete,onReminderToggle}) => {
  return (
    <div className={`task ${task.completed ? 'reminder' : ''}`} onDoubleClick={()=>onReminderToggle(task.id)}>
      <h3>{task.text}<AiFillCloseCircle onClick={()=>onDelete(task.id)} style={{color:'red',cursor:'pointer'}}/></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task