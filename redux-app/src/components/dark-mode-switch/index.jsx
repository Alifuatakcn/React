import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { setDarkMode } from '../../store/slices/theme-slice'

const DarkModeSwitch = () => {
   // const [darkMode,setDarkMode]=useState(false)

   const {darkMode}= useSelector(state=>state.theme)
   const dispatch=useDispatch()
  return (
    <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Dark"
        checked={darkMode}
        onChange={()=>dispatch(setDarkMode(!darkMode)) }
      />
  )
}

export default DarkModeSwitch