package com.example.demo.todo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ToDoController {

    @GetMapping("/todos")
    public String returnTodos() {
        return "todos.json";
    }
}
