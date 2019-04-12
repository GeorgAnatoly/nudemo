class ToDoRepository {
    constructor() {
        this.todolist = [];
    }

    create(todo) {
        this.todolist.push(todo);
    }

    getAll() {
        return this.todolist;
    }
}

export default ToDoRepository;