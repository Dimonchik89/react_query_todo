import axios from "axios";

const useHttp = () => {

    const fetchData = async (param: string): Promise<ITodo[]> => {
        // try {
        //     const response = await axios(import.meta.env.VITE_BASE_URL)
        //     return await response.data;
        // } catch (err) {
        //     if (err instanceof Error) {
        //         throw new Error(err.message)
        //     }
        // }
        if (param === "all") {
            const response = await axios(import.meta.env.VITE_BASE_URL)
            return await response.data;
        }
        const response = await axios(`${import.meta.env.VITE_BASE_URL}?completed=${param}`)
        return await response.data;
    }

    const postData = async (title: string): Promise<ITodo> => {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}`, {
            title,
            completed: false
        })
        return response.data;
    }

    const changeData = async (id: number, completed: boolean): Promise<ITodo> => {
        const response = await axios.patch(`${import.meta.env.VITE_BASE_URL}/${id}`, { completed })
        return await response.data;
    }

    const deleteData = async (id: number) => {
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/${id}`)
        console.log(response);

    }

    return { fetchData, postData, changeData, deleteData }
}

export default useHttp;