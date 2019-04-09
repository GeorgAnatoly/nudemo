package com.example.demo;

import com.example.demo.todo.todopersistence.ToDo;
import io.restassured.RestAssured;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {DemoApplication.class}, webEnvironment =
SpringBootTest.WebEnvironment.DEFINED_PORT)
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
                .put(API_ROOT + "/create");

        return API_ROOT + "/" + response.jsonPath().get("id");
    }

    @Test
    public void whenPutNewTodo_thenOK() {
        var todo = createToDo(1l, "foo", "bar");

        var response = RestAssured.given()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .body(todo)
                .put(API_ROOT + "/create");
        assertEquals(HttpStatus.OK.value(), response.getStatusCode());

    }

    @Test
    public void whenGetAllTodos_thenOK() {
        var response = RestAssured.get(API_ROOT);

        assertEquals(HttpStatus.OK.value(), response.getStatusCode());
    }

    @Test
    public void whenGetByTitle_thenOK_andListGreaterZero() {
        var todo = createToDo(2l, "Run","Hello, World!");
        createToDoAsURI(todo);

        var response = RestAssured.get(
                API_ROOT + "/title/" + todo.getTitle()
        );

        assertEquals(HttpStatus.OK.value(), response.getStatusCode());
        assertTrue(response.as(List.class)
        .size() > 0);

    }

    @Test
    public void whenPutTodo_thenGetByID_thenTitleCorrect() {
        var todo = createToDo(2l, "may-bee", "Yes");

        var location = createToDoAsURI(todo);

        var response = RestAssured.get(location);

        assertEquals(HttpStatus.OK.value(), response.getStatusCode());

        assertEquals(todo.getTitle(), response.jsonPath().get("title"));
    }

    @Test
    public void whenGetNonExistTodo_thenNotFound() {
        var response = RestAssured.get(API_ROOT + "/" + "234");

        assertEquals(HttpStatus.NOT_FOUND.value(), response.getStatusCode());
    }

    @Test
    public void whenPutUpdateInvalidTodo_thenError() {
        var todo = createToDo(6l, "fluff", "NoU!");
        createToDoAsURI(todo);

        todo.setTitle(null);

        var response = RestAssured.given()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .body(todo)
                .put(API_ROOT + "/" + todo.getId());

        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getStatusCode());
    }

    @Test
    public void whenPutUpdateTodo_thenOK() {
        var todo = createToDo(7l, "Jump!", "Yes!");
        createToDoAsURI(todo);

        todo.setTitle("Nope!");

        var response = RestAssured.given()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .body(todo)
                .put(API_ROOT + "/" + todo.getId());

        assertEquals(HttpStatus.OK.value(), response.getStatusCode());

        assertEquals("Nope!", response.jsonPath().get("title"));
    }

    @Test
    public void whenDeleteTodo_thenOK() {
        var todo = createToDo(13l, "Yip", "Yop");

        var location = createToDoAsURI(todo);

        var response = RestAssured.delete(location);

        assertEquals(HttpStatus.OK.value(), response.getStatusCode());

        response = RestAssured.get(location);

        assertEquals(HttpStatus.NOT_FOUND.value(), response.getStatusCode());
    }
}
