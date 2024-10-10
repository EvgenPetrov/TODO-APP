import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("добавление новой задачи", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/What needs to be done\?/i);
    const addButton = screen.getByText(/Добавить/i);

    fireEvent.change(inputElement, { target: { value: "Новая задача" } });
    fireEvent.click(addButton);

    expect(screen.getByText(/Новая задача/i)).toBeInTheDocument();
});

export {};
