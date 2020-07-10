import React, { Component } from "react";
import "./todo.css";

export interface ITodoListItemProps {
    id: string;
    label: string;
    delete: (id: string) => void;
};

export class TodoListItem extends Component<ITodoListItemProps> {
    public constructor(props: ITodoListItemProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="todo-item">
                <div>{this.props.label}</div>
                <div><button onClick={() => this.props.delete(this.props.id)}>Delete</button></div>
            </div>
        );
    }
}

export default TodoListItem;