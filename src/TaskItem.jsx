import React, { useState } from 'react';

const TaskItem = ({ task, setSelectedTask }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setSelectedTask(task);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setSelectedTask(null);
  };

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor }}
    >
      <td>{task.name}</td>
      <td>{task.time} min</td>
    </tr>
  );
};

export default TaskItem;
