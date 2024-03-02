
//クラス作成(この型に値を入れていくのがインスタンス)
export class Todo {
    constructor(public id: string, public title: string, public done: boolean, public created: Date) { }

    public static newTodo = (id: string, title: string, done: boolean, created_at: string) => {
        return new Todo(
            id,
            title,
            done,
            new Date(created_at)
        )
    }
}


