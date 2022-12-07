import { useState } from "react";
import { useTaskContext } from "../hooks/useTaskContext"
import {useNavigate} from 'react-router-dom'

const AddBatch = () => {

    const {dispatch, taskLists, list} = useTaskContext()
    const [tasks, setTasks] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const addBatch = (e) => {
        e.preventDefault()
        if(!date || !tasks){
            setError(true)
        }else{
        const Array = tasks.split('\n')
        Array.forEach((task) => {
            dispatch({type: 'ADD_TASK', payload: {name: task, date: date}})
        })
        navigate('/dashboard/')
        }
    }

    const handleChange = (e) => {
        dispatch({type: 'SET_LIST', payload: e.target.value})
    }

    return ( 
        <div className="addBatch">
            <div className="addBatch-form">
            <h1>Add Batch</h1>
                <div className="txtarea">
                    <textarea
                    onFocus={() => setError(false)}
                    value={tasks}
                    onChange={(e) => setTasks(e.target.value)}
                     style={{padding: '10px',height: '200px', width: '300px'}}
                     placeholder='task 1&#10;task 2&#10;task 3'
                     ></textarea>
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
                        <select
                        onFocus={() => setError(false)}
                         value={list} onChange={handleChange}>
                            {taskLists && taskLists.map((list) => (
                            <option key={list._id} value={list.name}>{list.name}</option>
                            ))}
                        </select>
                </div>
                <div className="input-group">
                <button onClick={addBatch}>add batch</button>
                </div>
                <div className={error ? "input-group message" : "show"}>
                    <p>ALL FIELDS REQUIRED</p>
                </div>
            </div>
        </div>
     );

}
 
export default AddBatch;