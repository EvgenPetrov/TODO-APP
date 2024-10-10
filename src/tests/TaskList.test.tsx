import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { Task } from "../types";

test("рендер списка задач", () => {
    const tasks: Task[] = [
        { id: 1, text: "Задача 1", completed: false },
        { id: 2, text: "Задача 2", completed: true },
    ];
    const toggleTask = jest.fn();

    render(<TaskList tasks={tasks} toggleTask={toggleTask} />);

    expect(screen.getByText(/Задача 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Задача 2/i)).toBeInTheDocument();
});

export {};
