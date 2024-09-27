import { useTaskContext } from '../../hooks/useTaskContext'
import { TaskList } from '../../components/TaskList/TaskList'
import DateInputForm from '../../components/DateInputForm/DateInputForm '

export const ActiveTasks = () => {

    const { tasks } = useTaskContext()
    const activeTasks = tasks.filter( task => !task.isDone )

  return (
    <>
      <DateInputForm />
      <TaskList taskList={ activeTasks }/>
    </>
  )
}
