function TaskCard({ task, deleteTask, updateStage }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <select
        value={task.stage}
        onChange={(e) => updateStage(task._id, e.target.value)}
      >
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <button
        type="button"
        className="delete-btn"
        onClick={() => deleteTask(task._id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;