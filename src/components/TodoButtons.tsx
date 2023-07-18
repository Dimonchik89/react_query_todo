
interface ITodoButtonsProps {
    changeFilter: (param: string) => void
}

const TodoButtons: React.FC<ITodoButtonsProps> = ({changeFilter}) => {

    return (
        <div style={{display: "flex", width: "300px", justifyContent: "space-between", marginBottom: "20px"}}>
            <button onClick={() => changeFilter("all")}>
                All
            </button>
            <button onClick={() => changeFilter("true")}>
                Checked
            </button>
            <button onClick={() => changeFilter("false")}>
                No checked
            </button>
        </div>
    )
}
export default TodoButtons;