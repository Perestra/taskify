import { TaskList } from '../../components/TaskList/TaskList'
import { useTaskContext } from '../../hooks/useTaskContext'

export const AllTasks = () => {

  const { tasks } = useTaskContext()

  return (
    <TaskList taskList={tasks} />
  )
}
