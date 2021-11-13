import Card from "../UI/Card"
import NewTask from "./NewTask"
import TaskList from "./TaskList"

const Tasks = () => {
    return (
        <Card>
            <NewTask />
            <TaskList />
        </Card>
    )
}

export default Tasks;