import style from './Task.module.scss'

import { CheckBox } from '../CheckBox/CheckBox'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TaskAction } from '../TaskAction/TaskAction';
import { useState } from 'react';

type Props = {
  text: string;
  id: string;
  isDone: boolean;
}

export const Task = ({ text, id, isDone }: Props) => {

  const [dialogActive, setDialogActive] = useState(false)

  return (
    <li className={ style.task }>
      <div className={ style.task__container }>
        <CheckBox id={id} isDone={isDone} />
        <span className={ style.task__name }>{text}</span>
        <div className={ style.task__action }>
          <HiOutlineDotsHorizontal className={ style.task__icon } onClick={() => setDialogActive(!dialogActive)}/>
          <TaskAction open={dialogActive} id={id} />
        </div>
      </div>
    </li>
  )
}
