import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTaskComplete } from "./components/ShowTaskComplete";
import { ShowTaskIncomplete } from "./components/ShowTaskIncomplete";
import "./App.css"

export default function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || [] );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList))
  }, [taskList]);

  const handleDelete = (id) => {
    const updateTask = taskList.filter((todo) => (todo.id !== id));
    setTaskList(updateTask);
  }

  const handleEdit = (id) => {
    const selectedTask = taskList.find(todo => (todo.id === id));
    setTask(selectedTask)
  }

  return (
    <div className='App'>
      <div className="container">
        <Header/>
        <AddTask 
          taskList={taskList} 
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
        <ShowTaskIncomplete 
          taskList={taskList} 
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <ShowTaskComplete 
          taskList={taskList} 
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>         
    </div>
  )
}
