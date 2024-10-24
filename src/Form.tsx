type TodoListProps = {
    onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => Promise<void>;
    error: string | null;
}

const TodoForm: React.FC<TodoListProps> = (props) => {
    const {onSubmit, error} = props;
    return (
        <form action="input-task" onSubmit={onSubmit}>
            <input id='task' type="text" />
            <input type="submit"/>
            { error ? <p>{error}</p> : null}
        </form>
        
    );
};

export default TodoForm;