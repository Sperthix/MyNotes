import Card from "../UI/Card";
import Task from "./Task";

const DUMMY_TASKS = [
  {
    label: "Create ToDo list",
    id: "t1",
  },
  {
    label: "Add multiple users",
    id: "t2",
  },
  {
    label: "add database (firebase)",
    id: "t3",
  },
  {
    label: "add authentification",
    id: "t4",
  },
  {
    label: "add my own database on server using nodeJS",
    id: "t5",
  },
];

const TaskList = (props) => {
  const taskList = DUMMY_TASKS.map((task) => {
    return <Task label={task.label} key={task.id} />;
  });

  return <ul>{taskList}</ul>;
};

export default TaskList;
