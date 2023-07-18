import { useMutation, useQueryClient } from "@tanstack/react-query"
import useHttp from "./useHttp"

const useDeleteTodo = (todo: ITodo) => {
    const { deleteData } = useHttp()
    const client = useQueryClient()

    return useMutation({
        mutationFn: deleteData,
        onSuccess: () => {
            // client.invalidateQueries(['todos', "all"])
            client.setQueryData<ITodo[]>(["todos", "all"], (oldTodo) => {
                const arr = oldTodo?.filter(item => item.id !== todo.id)
                return arr;
            })
        },
        onError: (err) => {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    })
}
export default useDeleteTodo;