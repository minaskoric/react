import React, { useState } from 'react';
import TaskItem from './TaskItem';
 
const TaskTable = ({ tasks }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskHover = task => {
    setSelectedTask(task);
  };

  const renderTasks = status => {
    return tasks
      .filter(task => task.status === status)
      .map(task => (
        <TaskItem key={task.id} task={task}  setSelectedTask={setSelectedTask}/>
      ));
  };

  return (
    <div className="glavna">
      <table className="task-table">
        <thead>
          <tr>
            <th className="column">Todo</th>
            <th className="column">In Progress</th>
            <th className="column">Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <table>
               
                <tbody>{renderTasks('todo')}</tbody>
              </table>
            </td>
            <td>
              <table>
               
                <tbody>{renderTasks('in progress')}</tbody>
              </table>
            </td>
            <td>
              <table>
               
                <tbody>{renderTasks('completed')}</tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      {selectedTask && (
        <div className="task-description">
          <h3>{selectedTask.name}</h3>
          <p>{selectedTask.description}</p>
        </div>
      )}
    </div>
  );
};

export default TaskTable;
