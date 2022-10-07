import React from 'react'
import PropsTypes from 'prop-types'
const Button = ({title,color,onClick}) => {
  return (
    <button style={{backgroundColor:color}} onClick={onClick} className='btn'>{title}</button>
  )
}
Button.defaultProps={
    title:'ADD',
    color:'black'
}
Button.propTypes={
    title:PropsTypes.string,
    color:PropsTypes.string,
    onClickL:PropsTypes.func
}
export default Button