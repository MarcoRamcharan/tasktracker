import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export const useTaskContext = () =>{
    const context = useContext(TaskContext)

    if(!context){
        throw Error('conext must be used in workout context proivder')
    }

    return context
}