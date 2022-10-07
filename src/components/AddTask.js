import React, { useState } from 'react'

const AddTask = ({onAdd}) => {
  const [text,setText]=useState("")
  const [day,setDay]=useState("")
  const [completed,setCompleted]=useState(false)

  const onSubmit=(e)=>{
    e.preventDefault()
    if(!text){
        alert('Add task')
        return
    }
    onAdd({text,day,completed})
    setText("")
    setDay("")
    setCompleted("")
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type="text" placeholder='Enter your Task' value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>Time & Day</label>
            <input placeholder='Enter Time & Day' value={day} onChange={(e)=>setDay(e.target.value)}/>
        </div>

        <div className='form-control form-control-check'>
            <label>Completed</label>
            <input type="checkbox" checked={completed} onChange={(e)=>setCompleted(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value='Save task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask