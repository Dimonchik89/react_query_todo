import { useMutation, useQueryClient } from "@tanstack/react-query";
import useHttp from "./useHttp";

const useChangeTodo = (todo: ITodo) => {
    const { changeData } = useHttp()

    const client = useQueryClient()

    return useMutation({
        mutationFn: () => changeData(todo.id, !todo.completed),
        onSuccess: (newTodo) => {
            client.setQueryData<ITodo[]>(["todos", "all"], (oldTodo) => {
                const arr = oldTodo?.map(item => {
                    if (item.id === newTodo.id) {
                        return newTodo;
                    }
                    return item
                })
                return arr
            })
        }
    })
}

export default useChangeTodo;