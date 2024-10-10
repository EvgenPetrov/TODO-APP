import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "../components/TaskItem";
import { Task } from "../types";

test("переключение статуса задачи", () => {
    const task: Task = { id: 1, text: "Задача", completed: false };
    const toggleTask = jest.fn();

    render(<TaskItem task={task} toggleTask={toggleTask} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(toggleTask).toHaveBeenCalledWith(task.id);
});

export {};
