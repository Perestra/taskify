import { useTaskContext } from '../../hooks/useTaskContext'
import { TaskList } from '../../components/TaskList/TaskList'
import DateInputForm from '../../components/DateInputForm/DateInputForm '

export const CompletedTasks = () => {

    const { tasks } = useTaskContext()
    const completedTasks = tasks.filter( task => task.isDone )

  return (
    <>
      <DateInputForm />
      <TaskList taskList={ completedTasks } />
    </>
  )
}
