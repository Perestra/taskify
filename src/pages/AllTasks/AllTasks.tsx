import DateInputForm from '../../components/DateInputForm/DateInputForm '
import { TaskList } from '../../components/TaskList/TaskList'
import { useTaskContext } from '../../hooks/useTaskContext'

export const AllTasks = () => {

  const { tasks } = useTaskContext()

  return (
    <>
      <DateInputForm />
      <TaskList taskList={tasks} />
    </>
  )
}
