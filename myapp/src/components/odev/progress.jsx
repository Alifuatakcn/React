import React, { useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import ProgressBar from 'react-bootstrap/ProgressBar';


const Progress = () => {
    const now = 60;
  
    
    const [count, setCount] = useState(60);
    const handleClick = (val) => {
        if (val < 0) val = 0;
        if(val>100) val=100;
        setCount(val)
    }
    return (
        <>
    
            <div className='text-center mt-5 '>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="info" className='fs-3' onClick={()=>handleClick(count+10)}><AiOutlinePlus /></Button>
                    <Button variant="danger" className='fs-3' onClick={()=>handleClick(count-10)}><AiOutlineMinus /></Button>
                </ButtonGroup>
               
            </div>
            <ProgressBar  className="text-center mt-5" now={now} label={`${count}%`} />
        </>
    )
}
export default Progress