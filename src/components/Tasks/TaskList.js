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
    label: "Add database (firebase)",
    id: "t3",
  },
  {
    label: "Add authentification",
    id: "t4",
  },
  {
    label: "Add my own database on server using nodeJS",
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
