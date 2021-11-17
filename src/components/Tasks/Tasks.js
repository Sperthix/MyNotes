import TodosProvider from "../../context/todos-provider";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

const Tasks = () => {
  return (
    <TodosProvider>
      <NewTask />
      <TaskList />
    </TodosProvider>
  );
};

export default Tasks;
