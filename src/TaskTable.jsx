import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskTable = ({ tasks }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [updatedTasks, setUpdatedTasks] = useState(tasks);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTaskClick = task => {
    const updatedTask = { ...task };

    if (task.status === 'todo') {
      updatedTask.status = 'in progress';
    } else if (task.status === 'in progress') {
      updatedTask.status = 'completed';
    } else if (task.status === 'completed') {
      // Brisanje zadatka iz liste
      setUpdatedTasks(prevTasks => prevTasks.filter(t => t.id !== updatedTask.id));
      setSelectedTask(null); // Poništavanje selektovanog zadatka
      return;
    }

    // Ažuriranje statusa zadatka
    setUpdatedTasks(prevTasks =>
      prevTasks.map(t => (t.id === updatedTask.id ? updatedTask : t))
    );
    setSelectedTask(updatedTask);
  };

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  const filterTasks = task => {
    return task.name.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const renderTasks = status => {
    return updatedTasks
      .filter(task => task.status === status && filterTasks(task))
      .map(task => (
        <TaskItem
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          isSelected={selectedTask?.id === task.id}
        />
      ));
  };

  return (
    <div className="glavna">
      <div className="search-container">
        <input
          type="text"
          placeholder="Pretraži taskove"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
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
