import React, { useState } from "react";
import { Container, Typography, Button, ButtonGroup, Box } from "@mui/material";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { Task } from "./types";

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

    const addTask = (text: string) => {
        const newTask: Task = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const clearCompleted = () => {
        setTasks(tasks.filter((task) => !task.completed));
    };

    const getFilteredTasks = () => {
        if (filter === "active") {
            return tasks.filter((task) => !task.completed);
        } else if (filter === "completed") {
            return tasks.filter((task) => task.completed);
        } else {
            return tasks;
        }
    };

    return (
        <Container
            maxWidth="sm"
            sx={{ backgroundColor: "#f5f5f5", padding: "20px", borderRadius: "10px" }}>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{ color: "#e6e6e6" }}>
                todos
            </Typography>
            <AddTask addTask={addTask} />
            <TaskList tasks={getFilteredTasks()} toggleTask={toggleTask} />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                }}>
                <Typography variant="body1">
                    {tasks.filter((task) => !task.completed).length} items left
                </Typography>
                <ButtonGroup>
                    <Button
                        onClick={() => setFilter("all")}
                        variant={filter === "all" ? "contained" : "text"}>
                        All
                    </Button>
                    <Button
                        onClick={() => setFilter("active")}
                        variant={filter === "active" ? "contained" : "text"}>
                        Active
                    </Button>
                    <Button
                        onClick={() => setFilter("completed")}
                        variant={filter === "completed" ? "contained" : "text"}>
                        Completed
                    </Button>
                </ButtonGroup>
                <Button onClick={clearCompleted} color="secondary">
                    Clear completed
                </Button>
            </Box>
        </Container>
    );
};

export default App;
