import { useState } from "react";
import { useTaskContext } from "../hooks/useTaskContext"
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'

const AddTask = () => {

    const {dispatch, list, taskLists} = useTaskContext()
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        dispatch({type: 'SET_LIST', payload: e.target.value})
    }

    const addTask = (e) =>{
        e.preventDefault()
        if(!title || !date){
            setError(!error)
        }else{
            const task = {
                name: title,
                date
            }
            dispatch({type: 'ADD_TASK', payload: task})
            setTitle('')
            setDate('')
            navigate('/dashboard/')
        }
    }

    return ( 
        <div className="addTask">
            <div className="addTask-heading">
            <h1>Add Task</h1>
            </div>
            <div className="addTask-body">
                <div className="input-group">
                    <label>title</label>
                    <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onFocus={() => setError(false)}
                     />
                </div>
                <div className="input-group">
                    <label>date</label>
                    <input type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    onFocus={() => setError(false)}
                    />
                </div>
                <div className="input-group">
                    <label>list</label>
                    <select value={list}
                    onFocus={() => setError(false)}
                     onChange={handleChange}>
                        {taskLists && taskLists.map((list) => (
                        <option key={list._id} value={list.name}>{list.name}</option>
                        ))}
                    </select>
                </div>
                <div className="input-group">
                <motion.button
                animate={{scale: 1}}
                 onClick={addTask}>ADD TASK</motion.button>
                </div>
                <div  className={error ? "input-group message" : "show"}>
                    <p>ALL FIELDS REQUIRED</p>
                </div>
            </div>
        </div>
     );
}
 
export default AddTask;