import { Form } from '../../components/Form/Form'
import { TaskList } from '../../components/TaskList/TaskList'
import style from './Home.module.scss'

export const Home = () => {
  return (
    <main className={ style.main }>
      <Form />
      <TaskList />
    </main>
  )
}
