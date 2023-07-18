import { useState } from "react";
import useCreateTodo from "../hooks/useCreateTodo";

const TodoForm = () => {
    const [value, setValue] = useState("")
    const {mutate} = useCreateTodo()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate(value)
        setValue("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={value}
                    onChange={e => setValue(e.target.value)}    
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
export default TodoForm;