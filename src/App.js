import React, { useState } from "react";
import { TaskBanner } from "./components/Actividad1/TaskBanner";
import { TaskRow } from "./components/Actividad1/TaskRow";
import { TaskCreator } from "./components/Actividad1/TaskCreator";

function App() {
  const [taskItems, setTaskItems] = useState([  ]);

  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };


  const toggleTask = task =>
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const taskTableRows = doneValue =>
    taskItems
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

  return (
    <div>
      <TaskBanner taskItems={taskItems} />
      <div className="container-fluid">
        <TaskCreator callback={createNewTask} />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>{taskTableRows(false)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
