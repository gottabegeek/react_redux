import { ITodoListItemStateProps, ITodoListItemDispatchProps } from './todo-list-item.component';
import { Guid } from 'guid-typescript';
import { removeTodo } from './todo.actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoListItem from './todo-list-item.component';
import { IApplicationState } from '../store.config';

const mapStateToProps = (state: IApplicationState, ownProps: ITodoListItemStateProps): ITodoListItemStateProps => ({
    id: ownProps.id,
    label: ownProps.label
});

const mapDispatchToProps = (dispatch: Dispatch): ITodoListItemDispatchProps => ({
    removeTodo: (id: Guid) => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem)