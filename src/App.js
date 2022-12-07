import MainLayout from './layouts/MainLayout';
import TaskLists from './pages/TaskLists';
import AddBatch from './pages/AddBatch';
import AddTask from './pages/AddTask'
import TaskHome from './pages/TaskHome'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/dashboard/'/>}></Route>
          <Route path='/dashboard/' element={<MainLayout/>}>
            <Route index element={<TaskHome/>}></Route>
            <Route path='addtask' element={<AddTask/>}></Route>
            <Route path='tasklists' element={<TaskLists/>}></Route>
            <Route path='addbatch' element={<AddBatch/>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
