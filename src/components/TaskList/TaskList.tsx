import style from './TaskList.module.scss'

import { TaskObject } from '../../types/TaskItem'
import { Task } from '../Task/Task';

type Props = {
  taskList: TaskObject[];
}

export const TaskList = ({ taskList }: Props) => {
  return (
    <main className={ style.main }>
      { taskList.length > 0 && 
        <article className={ style.main__article }>
          <ul className={ style.main__ul }>
            {taskList.map( task => <Task key={ task.id } id={ task.id } isDone={ task.isDone } text={ task.name } /> )}
          </ul>
        </article>
      }
    </main>
  )
}