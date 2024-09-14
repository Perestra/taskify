import style from './Home.module.scss'
import { TaskList } from '../../components/TaskList/TaskList'

export const Home = () => {
  return (
    <main className={ style.main }>
      <TaskList />
    </main>
  )
}
