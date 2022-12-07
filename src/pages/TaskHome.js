import { useTaskContext } from "../hooks/useTaskContext"
import { useState } from 'react'
import { Link } from "react-router-dom"


const TaskHome = () => {

    const {taskLists, list, dispatch} = useTaskContext()
    const [task, setTask] = useState('')

    const addQuickTask = (e) =>{
        if(!task){
            console.log('')
        }else{
        e.preventDefault()
        const newTask={
            name: task,
            date: null
        }
        dispatch({type: 'ADD_TASK', payload:newTask})
        setTask('')
        }
    }


    const taskDone = (i) =>{
        dispatch({type: 'DELETE_TASK', payload:i})
    }


    return ( 
        <div className="taskHome">
            <div className="tasklistview">
            <div className="addTaskLink">
                <Link to='/dashboard/addtask'><span className="addtask-text">ADD TASK</span><i className='fas fa-plus-circle'></i></Link>
            </div>
            

            <div className="addQuickTask">
                <h3>ADD QUICK TASK</h3>
                <div className="addquickform">
                    <form>
                        <div className="input-group">
                            <input type="text"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                             placeholder='enter a quick task'/>
                            <h1><i onClick={addQuickTask} class='fas fa-plus-circle'></i></h1>
                        </div>
                    </form>
                </div>
            </div>


            <h2 className='tasklistview-heading'>{list.toUpperCase()}</h2>
                {
                    taskLists && taskLists.map((tasklist) => {if(tasklist.name === list){
                        return (<div className='tasklists' key={tasklist._id}>
                            {
                                tasklist.tasks.length > 0 && tasklist.tasks.map((task, i) => (
                                    <div class='task' key={i}>
                                        <div>
                                        <h2> {task.name}</h2>
                                        <p><i class="fa-solid fa-calendar"></i> {task.date ? task.date : 'no date available'}</p>
                                        </div>
                                        <h2 style={{cursor: 'pointer'}} onClick={()=>{taskDone(i)}}><i class="fa-solid fa-circle-check"></i></h2>
                                    </div>
                                ))
                            }
                            {
                                tasklist.tasks.length === 0 && <h1>NO TASKS AVAILABLE</h1>
                            }
                            </div>)
                    }else{
                        return null
                    }
                }
                    )
                }
            </div>
            </div>
            );
}
 
export default TaskHome;
