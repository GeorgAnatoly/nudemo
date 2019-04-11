class ToDoRepository {
    constructor() {
        this.todolist = [];
    }

    setTodo(todo) {
        this.todolist.push(todo);
    }

    getAllTodo() {
        return this.todolist;
    }
}