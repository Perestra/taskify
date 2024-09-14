import style from './Task.module.scss'

import { CheckBox } from '../CheckBox/CheckBox'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TaskAction } from '../TaskAction/TaskAction';
import { useState } from 'react';

export const Task = () => {

  const [dialogActive, setDialogActive] = useState(false)

  return (
    <div className={ style.task }>
      <CheckBox />
      <span className={ style.task__name }>Comer arroz e carne moidaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
      <div className={ style.task__action }>
        <HiOutlineDotsHorizontal className={ style.task__icon } onClick={() => setDialogActive(!dialogActive)}/>
        <TaskAction open={dialogActive} />
      </div>
    </div>
  )
}
