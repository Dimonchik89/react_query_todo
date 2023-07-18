import TodoItem from "./TodoItem";
import useFetchTodo from "../hooks/useFetchTodo";

interface ITodoListProps {
    param: string
}

const TodoList: React.FC<ITodoListProps> = ({param}) => {
    const {data, isLoading, isSuccess} = useFetchTodo(param)

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    const content = isSuccess && data.map(todo => <TodoItem key={todo.id} todo={todo}/>)

    return (
        <>
            {content}
        </>
    )
}
export default TodoList;