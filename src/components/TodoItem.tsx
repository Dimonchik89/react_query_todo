import useChangeTodo from "../hooks/useChangeTodo"
import useDeleteTodo from "../hooks/useDeleteTodo"

interface ITodoItemProps {
    todo: ITodo
}

const TodoItem: React.FC<ITodoItemProps> = ({todo}) => {
    const {mutate: changeTodo} = useChangeTodo(todo)
    const {mutate} = useDeleteTodo(todo)

    return (
        <div style={{display: "flex", width: "300px"}}>
            <input 
                type="checkbox" 
                checked={todo.completed}   
                onChange={() => changeTodo()} 
            />
            <p style={{flex: "1 0 auto"}}>{todo.title}</p>
            <button onClick={() => mutate(todo.id)}>X</button>
        </div>
    )
}
export default TodoItem;