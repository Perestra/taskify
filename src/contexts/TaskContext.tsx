import { createContext, ReactNode } from "react";
import { TaskObject } from '../types/TaskItem'
import useLocalStorage from "use-local-storage";

type TaskContextType = {
    tasks: TaskObject[];
    setTasks: React.Dispatch<React.SetStateAction<TaskObject[]>>;
}

type Props = {
    children: ReactNode;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

const TaskProvider = ({ children }: Props) => {

    const [tasks, setTasks] = useLocalStorage<TaskObject[]>('Task',[]) as [TaskObject[], React.Dispatch<React.SetStateAction<TaskObject[]>>];

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            { children }
        </TaskContext.Provider>
    )
}

export { TaskContext, TaskProvider }
