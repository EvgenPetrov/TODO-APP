import { render, screen, fireEvent } from "@testing-library/react";
import AddTask from "../components/AddTask";

test("добавляет задачу при вводе текста и клике на кнопку", () => {
    const addTaskMock = jest.fn();
    render(<AddTask addTask={addTaskMock} />);

    const inputElement = screen.getByPlaceholderText("What needs to be done?");
    const buttonElement = screen.getByText("Добавить");

    fireEvent.change(inputElement, { target: { value: "Новая задача" } });
    fireEvent.click(buttonElement);

    expect(addTaskMock).toHaveBeenCalledWith("Новая задача");
});

export {};
