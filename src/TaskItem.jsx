import React from 'react';

const TaskItem = ({ task, handleTaskClick, isSelected }) => {
  let backgroundColor;
  if (task.status === 'todo') {
    backgroundColor = 'rgba(255, 138, 128, 0.5)';
  } else if (task.status === 'in progress') {
    backgroundColor = 'rgba(255, 255, 128, 0.5)';
  } else if (task.status === 'completed') {
    backgroundColor = 'rgba(144, 238, 144, 0.5)';
  }

  return (
    <tr
      onClick={() => handleTaskClick(task)}
      style={{ backgroundColor }}
      className={isSelected ? 'selected' : ''}
    >
      <td>{task.name}</td>
      <td>{task.time} min</td>
    </tr>
  );
};

export default TaskItem;
