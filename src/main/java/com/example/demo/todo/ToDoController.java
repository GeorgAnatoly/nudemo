package com.example.demo.todo;

import com.example.demo.todo.errorhandling.ToDoIdMismatchException;
import com.example.demo.todo.errorhandling.ToDoNotFoundException;
import com.example.demo.todo.todopersistence.ToDo;
import com.example.demo.todo.todorepository.ToDoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class ToDoController {

    private ToDoRepository toDoRepository;

    public ToDoController(ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    @GetMapping
    public Iterable findAll() {
        return toDoRepository.findAll();
    }

    @GetMapping("/title/{taskTitle}")
    public List findByTitle(@PathVariable String taskTitle) {
        return toDoRepository.findByTitle(taskTitle);
    }

    @GetMapping("/{id}")
    public ToDo findById(@PathVariable Long id) {
        return toDoRepository.findById(id)
                .orElseThrow(ToDoNotFoundException::new);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        toDoRepository.findById(id)
                .orElseThrow(ToDoNotFoundException::new);
        toDoRepository.deleteById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ToDo create(@RequestBody ToDo toDo) {
        return toDoRepository.save(toDo);
    }

    @PutMapping("/{id}")
    public ToDo updateTodo(@RequestBody ToDo todo, @PathVariable Long id) {
        if(todo.getId() != id)
            throw new ToDoIdMismatchException();

        toDoRepository.findById(id)
                .orElseThrow(ToDoNotFoundException::new);
        return toDoRepository.save(todo);
    }
}
