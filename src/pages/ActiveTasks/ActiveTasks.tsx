import { useTaskContext } from '../../hooks/useTaskContext'
import { TaskList } from '../../components/TaskList/TaskList'

export const ActiveTasks = () => {

    const { tasks } = useTaskContext()
    const activeTasks = tasks.filter( task => !task.isDone )

  return (
    <TaskList taskList={ activeTasks }/>
  )
}
