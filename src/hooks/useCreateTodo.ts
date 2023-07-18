import { useMutation } from "@tanstack/react-query";
import useHttp from "./useHttp";
import { useQueryClient } from "@tanstack/react-query";

const useCreateTodo = () => {
    const { postData } = useHttp()
    const client = useQueryClient()

    return useMutation({
        mutationFn: postData,
        onSuccess: (newTodo) => {
            // client.invalidateQueries(["todos", "all"])
            client.setQueryData<ITodo[]>(["todos", "all"], (oldTodos) => [...(oldTodos || []), newTodo])
        },
        onError: (err) => {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    })
}

export default useCreateTodo;