import { render, screen, waitFor } from "@testing-library/react"
import App from "../App"
import { Todo } from "../domain/todo"

describe("App", () => {

    it("テーブルにTodoが3つ表示されること", async () => {

        //モック関数用意
        const mockGetAllTodos = jest.fn().mockReturnValue([
            new Todo("1", "test", false, new Date()),
            new Todo("2", "test", false, new Date()),
            new Todo("3", "test", false, new Date()),
        ])
        jest.mock("../lib/todo", () => {
            return {
                GetAllTodos: mockGetAllTodos
            }
        })
        render(<App />);

        await waitFor(() => {
            expect(screen.getByTestId("table")).toBeInTheDocument();
        })
        expect(screen.getByTestId("table").querySelectorAll("tr").length).toBe(4)

    })
})