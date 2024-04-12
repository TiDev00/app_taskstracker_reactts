import { TaskModel } from "../TaskModel";
import { Task } from "./Task";

export const Tasks = ({
  tasks,
  onDelete,
  onToggle,
}: {
  tasks: TaskModel[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};
