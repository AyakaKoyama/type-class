import { Todo } from "../domain/todo"
import { supabase } from "../utils/supabase"

//Todo型はないので作る
export const getAlltodos = async (): Promise<Todo[]> => {
    const response = await supabase.from("todos").select("*")

    console.log(response.data)

    if (response.error) {
        throw response.error
    }

    const todos = response.data.map((t) => {
        return new Todo(t.id, t.name, t.done)
    }
    )
    return todos
}