import { Checkbox, ListItem, Typography, Box } from "@mui/material";
import { Task } from "../types";

interface TaskItemProps {
    task: Task;
    toggleTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask }) => {
    return (
        <ListItem
            sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #e0e0e0",
                padding: "10px 0",
            }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    sx={{
                        "& .MuiSvgIcon-root": { fontSize: 28 },
                        color: task.completed ? "#4caf50" : "#e0e0e0",
                    }}
                />
                <Typography
                    variant="body1"
                    sx={{
                        textDecoration: task.completed ? "line-through" : "none",
                        color: task.completed ? "#9e9e9e" : "#000000",
                    }}>
                    {task.text}
                </Typography>
            </Box>
        </ListItem>
    );
};

export default TaskItem;
