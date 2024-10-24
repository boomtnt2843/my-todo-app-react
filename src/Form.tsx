type TodoListProps = {
    onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => Promise<void>;
}

const TodoForm: React.FC<TodoListProps> = (props) => {
    const {onSubmit} = props;
    return (
        <form action="input-task" onSubmit={onSubmit}>
            <input id='task' type="text" />
            <input type="submit"/>
        </form>
    );
};

export default TodoForm;