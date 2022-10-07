import React from 'react'
import propsTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'
const Header = ({title,addTasktoggle,isAddTask}) => {
  const location = useLocation()
  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname==='/' && <Button color={!isAddTask ? "green" : "red" } title={!isAddTask ? "Add" : "Close" } onClick={addTasktoggle}/>}
    </header>
  )
}
Header.defaultProps={
    title:"Task-Tracker"
}
Header.propTypes={
    title:propsTypes.string.isRequired
}
export default Header