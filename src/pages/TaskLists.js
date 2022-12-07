import { useTaskContext } from "../hooks/useTaskContext"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskLists = () => {

    const navigate = useNavigate()

    const [newTaskList, setNewTaskList] = useState('')
    const {taskLists, dispatch} = useTaskContext()

    const addNewTaskList = (e) => {
        e.preventDefault()
        if(!newTaskList){
            console.log('')
        }else{
        const newTask = {
        _id: taskLists[taskLists.length - 1]['_id'] + 1,
        name: newTaskList,
        tasks:[]
        }
        dispatch({type: 'ADD_TASKLISTS', payload: newTask})
        setNewTaskList('')
        }
    }
    
    const deleteTaskList = (_id) => {
        console.log(_id)
        dispatch({type: 'DELETE_TASKLISTS', payload: parseInt(_id)})
    }

    const Edit = (name) => {
        dispatch({type: 'SET_LIST', payload: name})
        navigate('/dashboard')
    }
    

    return ( 
        <div className="tasklistsPage">
            <div className="addTaskList">
                <h3>ADD TASK LIST</h3>
                <div className="addTaskList-form">
                <form>
                    <div className="input-group">
                    <input type="text" 
                    value={newTaskList}
                    onChange={(e) => setNewTaskList(e.target.value)}
                    placeholder='enter tasklist'
                    />
                    <h1><i onClick={addNewTaskList} class='fas fa-plus-circle'></i></h1>
                    </div>
                </form>
                </div>
            </div>


                { taskLists && 
                    taskLists.map((tasklist) => (
                        <div key={tasklist._id} className="tasklist-view">
                            <div>
                            <h3>{tasklist.name}</h3>
                            <h5>tasks: { tasklist.tasks.length > 0 ? tasklist.tasks.length : 'no tasks'}</h5>
                            </div>
                            <div className='right'>
                            <h2 style={{color: 'purple',cursor: 'pointer'}} onClick={() => {Edit(tasklist.name)}}><i class="fa-solid fa-pen"></i></h2>
                            <h2 style={{color: 'red', cursor: 'pointer'}} onClick={() => {deleteTaskList(tasklist._id)}}><i class="fa-solid fa-trash"></i></h2>
                            </div>
                        </div>
                    ))
                }
        </div>
     );
}
 
export default TaskLists;