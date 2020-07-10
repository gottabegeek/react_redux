import * as Todos from './todos/todo.reducer';
import { combineReducers, Reducer, AnyAction, Store, createStore } from 'redux';

export interface IApplicationState {
    todos: Todos.ITodoState; 
}

const configureRootReducer = (): Reducer<IApplicationState, AnyAction> => {
    return combineReducers<IApplicationState>({
        todos: Todos.reducer
    });
};

const configureStore = (): Store<IApplicationState> => {
    const allReducers: Reducer<IApplicationState, AnyAction> = configureRootReducer();
    const store: Store<IApplicationState> = createStore(allReducers);
    const hmrDependencies: string[] = [ './todos', './about' ];
    if ((module as any).hot) {
        (module as any).hot.accept(hmrDependencies, (): void => {
            store.replaceReducer(configureRootReducer());
        });
    }

    return store;
}

export default configureStore;