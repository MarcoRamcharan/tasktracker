import { createContext, useReducer} from "react";

export const TaskContext = createContext()

export const taskReducer = (state, action) => {
    switch(action.type){


        case 'DELETE_TASK':
            let ind ;
            state.taskLists.map((tasklist, i) => {
               if(tasklist.name === state.list){
                   return ind = i
               }
               else{
                   return 'nothing here'
               }
           })
           return{ ...state, taskLists:[
            ...state.taskLists.map((tasklist, i) => {
                if(i === ind){ 
                    const newtasklist = {
                        _id: state.taskLists[ind]._id,
                        name: state.taskLists[ind].name,
                        tasks: state.taskLists[ind].tasks.filter((task, i) => i !== action.payload)
                    }
                    return newtasklist
                }else{
                    return tasklist
                }
            })
        ]}


        case 'ADD_TASKLISTS':
            return {...state, taskLists : [...state.taskLists, action.payload]}

        case 'DELETE_TASKLISTS':
            return {
                ...state, taskLists: state.taskLists.filter((tasklist) => tasklist._id !== action.payload)
            }

        case 'SET_LIST':
            return {...state, list : action.payload}

        case 'ADD_TASK':  
            let index ;
             state.taskLists.map((tasklist, i) => {
                if(tasklist.name === state.list){
                    return index = i
                }
                else{
                    return 'nothing here'
                }
            })
            return{ ...state, taskLists:[
                ...state.taskLists.map((tasklist, i) => {
                    if(i === index){ 
                        const newtasklist = {
                            _id: state.taskLists[index]._id,
                            name: state.taskLists[index].name,
                            tasks: [...state.taskLists[index].tasks, action.payload]
                        }
                        return newtasklist
                    }else{
                        return tasklist
                    }
                })
            ]}

        default:
            return state
    }
}



/*
for (const obj of arr2) {
  if (obj.id === 1) {
    obj.name = 'Alfred';

    break;
  }
}

*/







export const TaskContextProvider = ({children}) => {
    const [state, dispatch]= useReducer(taskReducer,{
        taskLists : [
            {
                _id: 0,
                name: 'default',
                tasks:[
                    {name: 'task1', date: '2022/04/13'},
                    {name: 'task2', date: '2019/02/11'}
                ]
            },
            {
                _id: 1,
                name: 'shopping',
                tasks:[
                    {name: 'buy a dog', date: '2022/04/14'},
                    {name: 'buy a cat', date: '2023/08/24'},
                ]
            },
            {
                _id: 2,
                name: 'homework',
                tasks:[
                    {name: 'learn maths', date: '2022/04/14'},
                    {name: 'learn english', date: '2022/04/07'}
                ]
            }
        ],
        list: 'default'
    })
    

    console.log('taskcontextstate', state)

    return(
        <TaskContext.Provider value={{...state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}