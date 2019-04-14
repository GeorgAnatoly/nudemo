import React from 'react';
import Button from "./Button";

const isSearched = searchTerm => todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase());

const columnSize = {
    largeColumn: {width: "40%"},
    midColumn: {width: "30%"},
    smallColumn: {width: "10%"}
};

const Table = ({todo, pattern, onDismiss}) =>
    <div className={"table"}>
        {todo.filter(isSearched(pattern)).map(todo =>
        <div key={todo.id} className={"table-row"}>
            <div style={columnSize.largeColumn}>
                {todo.title}
            </div>
            <div style={columnSize.smallColumn}>
                {todo.task}
            </div>
            <div style={columnSize.smallColumn}>
            <Button
                onClick={() => onDismiss(todo.id)}
                className={"button-inline"}
            >
                Dismiss
            </Button>
            </div>
        </div>
    )}
    </div>;

export default Table;