import React from 'react';
import Task from '../../components/Task/Task';

const TaskList = ({taskLists}) => {
  const listItem = taskLists
  .filter(task=>!task.isOver)
  .map((task, index) =>
    <Task key={index} task = {task.new_task} isOver = {task.isOver}  />
  );
  return (
    <div className="TaskList">
      <ul>{listItem}</ul>
    </div>
  )
}
export default TaskList;
