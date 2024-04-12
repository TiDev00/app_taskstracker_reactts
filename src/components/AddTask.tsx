import { useState } from "react";
import { TaskModel } from "../TaskModel";

export const AddTask = ({ onAdd }: { onAdd: (task: TaskModel) => void }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    // stop form from submitting to page
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ id: Math.floor(Math.random() * 10000), text, day, reminder });

    // clear inputs after submit
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
};
