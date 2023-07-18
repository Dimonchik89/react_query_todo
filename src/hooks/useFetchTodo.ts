import { useQuery } from "@tanstack/react-query";
import useHttp from "./useHttp";

const useFetchTodo = (param: string) => {
    const { fetchData } = useHttp()

    return useQuery({
        queryFn: () => fetchData(param),
        queryKey: ["todos", param],
        staleTime: 5000,
        onError: (err) => {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    })
}
export default useFetchTodo;