package com.example.demo.todo.todorepository;

import com.example.demo.todo.todopersistence.ToDo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ToDoRepository extends CrudRepository<ToDo, Long> {
    List<ToDo> findByTitle(String title);
}
