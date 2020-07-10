import React, { FunctionComponent } from "react";
import { Guid } from 'guid-typescript';
import "./todo.css";

export interface ITodoListItemStateProps {
    id: Guid;
    label: string;
};

export interface ITodoListItemDispatchProps {
    removeTodo: (id: Guid) => void;
}

const TodoListItem: FunctionComponent<ITodoListItemStateProps & ITodoListItemDispatchProps> = (props: ITodoListItemStateProps & ITodoListItemDispatchProps) => {
    return (
        <div className="todo-item">
            <div>{props.label}</div>
            <div><button onClick={() => props.removeTodo(props.id)}>Delete</button></div>
        </div>
    );
}

export default TodoListItem;