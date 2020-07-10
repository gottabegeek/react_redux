import { Guid } from 'guid-typescript';
import { ITodo } from './todo';
import { Reducer } from 'redux';
import { TodoAction, TodoActionType } from './todo.actions';

export interface ITodoState {
    todos: Map<Guid, ITodo>;
}

const initialState: ITodoState = {
    todos: new Map<Guid, ITodo>()
}

export const reducer: Reducer<ITodoState> = (state: ITodoState = initialState, action: TodoAction): ITodoState => {
    switch (action.type) {
        case TodoActionType.ADD_TODO: {
            const id: Guid = Guid.create();
            const newTodo: ITodo = { id, label: action.payload };
            const todos = new Map(state.todos)
            todos.set(id, newTodo);
            return { ...state, todos };
        }
        case TodoActionType.REMOVE_TODO: {
            const todos = { ...state.todos };
            todos.delete(action.payload);
            return { ...state, todos };
        }
        default:
            return { ...state };
    }
};