class ToDoClientController {
    constructor(repository) {
        this.repository = repository;
    }
// bidirectional - not intended use of react
    createToDo(todo) {
        return this.repository.create(todo);
    }

    getAllToDo() {
        return this.repository.getAll();
    }
}

export default ToDoClientController;