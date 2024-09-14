import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"

export const useTaskContext = () => {
    const context = useContext(TaskContext)

    if(!context) {
        throw new Error('useTaskContext precisa estar no TaskProvider')
    }

    const { task, setTask } = context

    return { task, setTask }
}