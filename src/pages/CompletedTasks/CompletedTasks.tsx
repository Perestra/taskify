import { useTaskContext } from '../../hooks/useTaskContext'
import { TaskList } from '../../components/TaskList/TaskList'

export const CompletedTasks = () => {

    const { tasks } = useTaskContext()
    const completedTasks = tasks.filter( task => task.isDone )

  return (
    <TaskList taskList={ completedTasks } />
  )
}
