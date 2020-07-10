import { addTodo } from './todo.actions';
import { IApplicationState } from './../store.config';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoList, { ITodoListStateProps, ITodoListDispatchProps } from './todo-list.component';

const mapStateToProps = (state: IApplicationState): ITodoListStateProps => ({
    todos: state.todos.todos
});

const mapDispatchToProps = (dispatch: Dispatch): ITodoListDispatchProps => ({
    addTodo: (label: string) => dispatch(addTodo(label))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)