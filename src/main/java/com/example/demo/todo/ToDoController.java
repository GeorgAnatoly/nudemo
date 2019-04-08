package com.example.demo.todo;

import com.example.demo.todo.todopersistence.ToDo;
import com.example.demo.todo.todorepository.ToDoRepository;
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
    public ToDo findById(@PathVariable Long id) throws Exception{
        return toDoRepository.findById(id)
                .orElseThrow(Exception::new);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) throws Exception {
        toDoRepository.findById(id)
                .orElseThrow(Exception::new);
        toDoRepository.deleteById(id);
    }

    @PutMapping("/create")
    public ToDo create(@RequestBody ToDo toDo) {
        return toDoRepository.save(toDo);
    }
}
