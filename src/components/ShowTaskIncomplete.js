
export const ShowTaskIncomplete = ({taskList, setTaskList, task, setTask, handleDelete, handleEdit}) => {

  // const tasks = [
  //   {id:1, name:'Task A', time:"2:09:31 AM 9/14/2022", completed:false},
  //   {id:2, name:'Task B', time:"2:09:31 AM 9/14/2022", completed:false},
  //   {id:3, name:'Task C', time:"2:09:31 AM 9/14/2022", completed:true},
  //   {id:4, name:'Task D', time:"2:09:31 AM 9/14/2022", completed:false}]

  const handleEditStatusCompleted = (id) => {
    const updatedTaskStatus = taskList.map(todo => todo.id === id ? {...todo, completed:true} : todo );
    setTaskList(updatedTaskStatus);
  }

  return (
    <section className="showTask">
        <p className="head">
          <span>
              <span className="title">Task Incomplete</span>
              {/* <span className="count">{taskList.length}</span> */}
          </span>
          {/* <span className="clearAll" onClick={() => setTaskList([])}>Clear All</span> */}
        </p>
        <ul>
            {taskList.map((task) =>  (
              <li className={task.completed ? "hidden" : "card"} key={task.id}>
                <p>
                  <span className="name">{task.name}</span>
                  <span className="tile">{task.time}</span>
                </p>
                <i onClick={() => handleEditStatusCompleted(task.id)} className="bi bi-check2-circle"></i>
                <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
                <i onClick={()=> handleDelete(task.id)} className="bi bi-trash"></i> 
                <p>{task.completed}</p>
              </li>
            ))}
        </ul>
    </section>
  )
}
