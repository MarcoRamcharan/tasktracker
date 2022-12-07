import { NavLink } from "react-router-dom";
import { useTaskContext } from "../hooks/useTaskContext"
import {motion} from 'framer-motion'


const Navbar = () => {

    const {taskLists, list, dispatch} = useTaskContext()
    

    const handleChange = (e) => {
      dispatch({type: 'SET_LIST', payload: e.target.value})
    }

    return ( 
        <div className="navbar">
        <motion.h1
        initial={{y:-400, opacity: 0, color: 'grey'}}
        animate={{y: 0, opacity: 1, color: 'white'}}
        transition={{duration: 1}}
        >TASK TRACKER</motion.h1>
        <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 2}}
         className="select-container">
          <select value={list} onChange={handleChange}>
            {taskLists && taskLists.map((list) => (
              <option key={list._id} value={list.name}>{list.name}</option>
            ))}
          </select>
        </motion.div>
        <motion.div 
            initial={{x: 2000,y:-400, opacity: 0, color: 'grey'}}
            animate={{x:0, y: 0, opacity: 1, color: 'white'}}
            transition={{duration: 2}}
        className="links">
            <NavLink className={({isActive})=>(isActive ? 'active' : 'link')} to='/dashboard'>TASK HOME</NavLink>
            <NavLink className={({isActive})=>(isActive ? 'active' : 'link')} to='/dashboard/tasklists'>TASK LIST</NavLink>
            <NavLink className={({isActive})=>(isActive ? 'active' : 'link')} to='/dashboard/addbatch'>BATCH MODE</NavLink>
        </motion.div>
    </div>
     );
}

export default Navbar;