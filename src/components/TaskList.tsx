import TaskItem from "./TaskItem";
import { Task } from "../types";
import { Box } from "@mui/material";

interface TaskListProps {
    tasks: Task[];
    toggleTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask }) => {
    return (
        <Box
            sx={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                padding: "10px",
            }}>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
            ))}
        </Box>
    );
};

export default TaskList;
