import { FaTimes } from "react-icons/fa";
import { TaskModel } from "../TaskModel";

export const Task = ({
  task,
  onDelete,
  onToggle,
}: {
  task: TaskModel;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};
