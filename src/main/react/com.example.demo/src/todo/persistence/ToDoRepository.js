class ToDoRepository {
    constructor() {
        this.todolist = [];
    }

    // would realistically define an ordered array with binary search
    // at a minimum
    setTodo(todo) {
        this.todolist.push(todo);
    }

    getAllTodo() {
        return this.todolist;
    }
}

export default ToDoRepository;