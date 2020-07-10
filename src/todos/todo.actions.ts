import { Guid } from 'guid-typescript';
import { Action } from 'redux';
import { ITodo } from './todo';

export enum TodoActionType {
    ADD_TODO = "@@todos/ADD_TODO",
    REMOVE_TODO = "@@todos/REMOVE_TODO"
}

interface IAddTodo extends Action<TodoActionType> {
    readonly type: TodoActionType.ADD_TODO;
    readonly payload: string;
}

export const addTodo = (payload: string): IAddTodo => ({
    type: TodoActionType.ADD_TODO,
    payload
});

interface IRemoveTodo extends Action<TodoActionType> {
    readonly type: TodoActionType.REMOVE_TODO;
    readonly payload: Guid;
}

export const removeTodo = (payload: Guid): IRemoveTodo => ({
    type: TodoActionType.REMOVE_TODO,
    payload
});

export type TodoAction = IAddTodo | IRemoveTodo;