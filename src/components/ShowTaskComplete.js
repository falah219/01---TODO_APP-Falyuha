export const ShowTaskComplete = ({taskList, setTaskList, task, setTask, handleDelete}) => {

  const handleEditStatusIncomplete = (id) => {
    const updatedTaskStatus = taskList.map(todo => todo.id === id ? {...todo, completed:false} : todo );
    setTaskList(updatedTaskStatus);
  }
  return (
    <section className="showTask">
        <p className="head">
          <span>
              <span className="title">Task Complete</span>
              {/* <span className="count">{taskList.length}</span> */}
          </span>
          {/* <span className="clearAll" onClick={() => setTaskList([taskList.map(task2 => task2.completed = true)])}>Clear All</span> */}
        </p>
        <ul>
            {taskList.map((task) =>  (
              <li className={task.completed ? "card" : "hidden"} key={task.id}>
                <p>
                  <span className="name">{task.name}</span>
                  <span className="tile">{task.time}</span>
                </p>
                <i onClick={() => handleEditStatusIncomplete(task.id)} className="bi bi-x-circle-fill"></i>
                <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i> 
              </li>
            ))}
        </ul>
    </section>
  )
}
