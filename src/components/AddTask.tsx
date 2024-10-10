import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface AddTaskProps {
    addTask: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTask(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", marginBottom: "20px" }}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="What needs to be done?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
                Добавить
            </Button>
        </form>
    );
};

export default AddTask;
