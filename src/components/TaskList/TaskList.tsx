import style from './TaskList.module.scss'

import { Task } from '../Task/Task'

export const TaskList = () => {
  return (
    <article className={ style.article }>
        <Task />
    </article>
  )
}