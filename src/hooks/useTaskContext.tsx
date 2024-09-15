import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"
import { TaskObject } from "../types/TaskItem"
import { v4 as uuid } from "uuid"

export const useTaskContext = () => {

    const context = useContext(TaskContext)
    
    if(!context) {
        throw new Error('useTaskContext precisa estar no TaskProvider')
    }

    const { tasks, setTasks } = context

    const RemainingTasks = () => {
       const completedTasks = tasks.filter( task => !task.isDone)
       return completedTasks.length
    }

    const addTask = ( task: string | TaskObject ) => {
        if(typeof task === 'string' && task.trim().length !== 0) {
            task = {
                id: uuid(),
                name: task,
                isDone: false
            }
            setTasks([task, ...tasks])
        }
    }

    const deleteTask = (id: string) => {
        setTasks(tasks.filter( task => id !== task.id ))
    }

    const cleanCompletedTasks = () => {
        setTasks(tasks.filter( task => !task.isDone ))        
    }

    const setAllTasksCompleted = () => {
        setTasks(tasks.map( task => !task.isDone? { ...task, isDone: !task.isDone }: task ))
    }

    const isDoneToggle = (id: string) => {
        const index = tasks.findIndex( task => id === task.id )
        const spreadTask = [...tasks]
        spreadTask[index].isDone = !spreadTask[index].isDone
        setTasks( spreadTask )
    }

    return { tasks, setTasks, RemainingTasks, addTask, deleteTask, cleanCompletedTasks, setAllTasksCompleted, isDoneToggle }
}