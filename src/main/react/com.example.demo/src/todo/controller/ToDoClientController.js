class ToDoClientController {
    constructor(repository) {
        this.repository = repository;
    }

    createToDo(todo) {
        return this.repository.create(todo);
    }

    getAllToDo() {
        return this.repository.getAll();
    }
}

export default ToDoClientController;