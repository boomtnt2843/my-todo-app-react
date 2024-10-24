import { Todo } from "./type";

type TodoListProps = {
    todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const todoItems: JSX.Element[] = [];
    for (const todo of props.todos) {
        todoItems.push(<li key={todo.id}>{todo.text}</li>);
    }
    return (
        <ul>
            {todoItems}
        </ul>
    );
};

export default TodoList;