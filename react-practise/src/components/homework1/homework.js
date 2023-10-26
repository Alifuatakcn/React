import '../homework/homework.scss'
import React from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Content from './content'

const Homework = () => {
    
  return (
    <div className='container' >
    
       <Header/>
        <div className='side-cont'>
            <Sidebar className='side-cont'/>
            <Content className='side-cont'/>
        </div>
    </div>
  )
}

export default Homework