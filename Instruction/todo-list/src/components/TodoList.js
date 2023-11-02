import React,{usaState} from 'react'
import CreateTask from '../modals/createTask'

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList,setTaskList]=useState([])
  const toggle = () =>{ 
    setModal(!modal);
}

    
  return (
     <>
        <div className='header text-center' >
            <h3 className='mt-3'>Todo List</h3>
            <button className='btn btn-primary mt-2' onClick={ ()=> setModal(true)}>Create Task</button>
       </div>
       <div className='task-container'>
            
       </div>
       <CreateTask toggle={toggle} modal={modal}/>
     </>
  )
}

export default TodoList