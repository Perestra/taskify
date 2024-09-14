import style from './AllTasks.module.scss'
import { TaskList } from '../../components/TaskList/TaskList'

export const AllTasks = () => {
  return (
    <main className={ style.main }>
      <TaskList />
    </main>
  )
}
