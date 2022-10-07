import React, { useEffect, useState } from 'react'
import Tasks from "./Tasks";
import AddTask from "./AddTask";
const TaskApp = ({showAddTask}) => {
  const [tasks,setTasks] = useState([])
  useEffect(()=>{
    const getTask=async ()=>{
      const data=await fetchTask()
      setTasks(data)
    }
    getTask()
  },[])

  const fetchTask= async (id)=>{
    const res=await fetch(`http://localhost:5000/tasks/${id?id:''}`)
    const data=await res.json()
    return data
  }

  const addTask=async (data)=>{
    const res=await fetch("http://localhost:5000/tasks",{
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(data),
    })
    const newTask=await res.json()
    setTasks([...tasks,newTask])
  }

  const deleteTask= async(id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  const toggleReminder=async (id)=>{
    const res=await fetchTask(id)
    const updTask={...res,completed:!res.completed}
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(updTask),
    })
    setTasks(tasks.map((task)=>(task.id===id ? {...task,completed:!task.completed}: task)))
}
  return (
    <>
       {showAddTask && <AddTask onAdd={addTask}/>}
       {(tasks.length>0) ? <Tasks tasks={tasks} onDelete={deleteTask} onReminderToggle={toggleReminder} /> : "No Task To Display"}
    </>
  )
}

export default TaskApp