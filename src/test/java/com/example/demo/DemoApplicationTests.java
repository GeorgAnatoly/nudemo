package com.example.demo;

import com.example.demo.todo.todopersistence.ToDo;
import io.restassured.RestAssured;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoApplicationTests {

    private static final String API_ROOT =
            "http://localhost:8080/todos";

    private ToDo createToDo(Long id, String task,
                           String title) {
        var todo = new ToDo();
        todo.setId(id);
        todo.setTask(task);
        todo.setTitle(title);

        return todo;
    }

    private String createToDoAsURI(ToDo todo) {
        var response = RestAssured.given()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .body(todo)
                .post(API_ROOT);

        return API_ROOT + "/" + response.jsonPath().get("id");
    }

    // TODO finish createToDo integration test
    @Test
    public void whenCreateNewToDo_thenCreated() {
        var ToDo = createToDo(1, "foo", "bar");

    }
}
