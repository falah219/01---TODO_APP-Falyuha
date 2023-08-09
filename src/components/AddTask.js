import { useRef, useState } from "react";

export const AddTask = ({taskList, setTaskList, task, setTask}) => {

  const [progress, setProgress] = useState(false)
  const taskRef = useRef("")

  // const handleReset = () => {
  //   console.log(e);
  //   setProgress(false);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();


    if (task.id) {
      const date = new Date();
      const updatedTaskList = taskList.map(todo => (
        todo.id === task.id? {...todo, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`, completed: Boolean(progress)} : todo
      ))
      setTaskList(updatedTaskList);
      setTask({});
      setProgress(false);
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: taskRef.current.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        completed: Boolean(progress)
      };
      setTaskList([...taskList, newTask]);
      console.log(newTask);
  
      setTask({});
      setProgress(false);
      
  
    }
    // console.log(date.getTime());
    // console.log(taskRef.current.value);
    // console.log(`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`);
    // console.log(e.target.taskStatus.value);

  }

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTask({...task, name: e.target.value})} className="input" type="text" value={task.name || ""}   name="task" autoComplete="false" placeholder="Add Task" maxLength={25} ref={taskRef}/>
            <select onChange={(e) => setProgress(e.target.value)} className="input" name="taskStatus"  value={progress}>
                <option value="false">Incomplete</option>
                <option value="true">Completed</option>
            </select>
            <button className="button"> { task.id ? "Update" : "Add"} </button>
        </form>
    </section>
  )
}
