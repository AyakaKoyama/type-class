import { Todo } from "../domain/todo"
import { supabase } from "../utils/supabase"

//Todo型はないのでクラス作る
export const getAlltodos = async (): Promise<Todo[]> => {
    const response = await supabase.from("todos").select("*")

    if (response.error) {
        throw response.error
    }

    const todos = response.data.map((t) => {
        return Todo.newTodo(t.id, t.title, t.done, t.created_at)
    }
    )

    console.log(todos)

    return todos
}