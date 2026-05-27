import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stage, setStage] = useState("Todo");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      title,
      description,
      stage,
    });

    setTitle("");
    setDescription("");
    setStage("Todo");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <select value={stage} onChange={(e) => setStage(e.target.value)}>
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;