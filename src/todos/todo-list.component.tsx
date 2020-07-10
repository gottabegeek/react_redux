import React, { FunctionComponent, useState } from "react";
import Todo from "./todo-list-item.container";
import { Guid } from 'guid-typescript';
import { ITodo } from "./todo";

export interface ITodoListStateProps {
    todos: Map<Guid, ITodo>;
}

export interface ITodoListDispatchProps {
    addTodo: (label: string) => void;
}

const TodoList: FunctionComponent<ITodoListStateProps & ITodoListDispatchProps> = (props: ITodoListStateProps & ITodoListDispatchProps) => {
    const [labelInput, setLabel] = useState<string>("");
    const onAdd = (): void => {
        props.addTodo(labelInput);
        setLabel("");
    };
    return (
        <div>
            <input placeholder="What needs done?" value={labelInput} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLabel(event.currentTarget.value)} />
            <button id="add-button" disabled={labelInput == ""} onClick={onAdd}>Add</button>
            <ul>
                {Array.from(props.todos, ([id, todo]) => <Todo key={id.toString()} id={id} label={todo.label} />)}
            </ul>
        </div>
    );
}

export default TodoList;