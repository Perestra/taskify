import { createContext, ReactNode } from "react";
import { TaskObject } from '../types/TaskItem'
import useLocalStorage from "use-local-storage";

type TaskContextType = {
    task: TaskObject[];
    setTask: React.Dispatch<React.SetStateAction<TaskObject[]>>;
}

type Props = {
    children: ReactNode;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

const TaskProvider = ({ children }: Props) => {

    const [task, setTask] = useLocalStorage<TaskObject[]>('Task',[]) as [TaskObject[], React.Dispatch<React.SetStateAction<TaskObject[]>>];

    return (
        <TaskContext.Provider value={{ task, setTask }}>
            { children }
        </TaskContext.Provider>
    )
}

export { TaskContext, TaskProvider }
