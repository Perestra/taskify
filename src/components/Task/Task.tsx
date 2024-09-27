import style from './Task.module.scss'

import { CheckBox } from '../CheckBox/CheckBox'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuCheck } from "react-icons/lu";
import { TaskAction } from '../TaskAction/TaskAction';
import { useState } from 'react';
import { useTaskContext } from '../../hooks/useTaskContext';
import { Button } from '../Button/Button';

type Props = {
  id: string;
  text: string;
  isDone: boolean;
}

export const Task = ({ id, text, isDone }: Props) => {

  const [dialogActive, setDialogActive] = useState(false)
  const [isEditable, setIsEditable] = useState(false)
  const [newTask, setNewTask] = useState('')
  const { editTask } = useTaskContext()
  
  const editNameTask = (id: string, newName: string) => {
    editTask(id, newName)
    setIsEditable(false)
  }

  const isNameChanged = (text: string, newTask: string) => {
    if(isEditable && newTask.trim().length > 0 && newTask !==text) return newTask
    return text 
  }

  return (
    <li className={ style.task }>
      <div className={ `${style.task__container} ${isEditable && style.task__nameEditable}` }>
        <CheckBox id={id} isDone={isDone} />
        <input 
          name='task'
          id='name'
          className={ `${style.task__name} ${ isDone && style.task__Completed}` } 
          type="text" 
          value={isNameChanged(text, newTask)} 
          contentEditable={isEditable} 
          onChange={ event => setNewTask(event.target.value) } 
        />
        <div className={ style.task__settings }>
          { !isEditable && <Button 
            btnClass={ style.task__action }
            iconClass={ style.task__icon }
            type='button'
            title='Configurações'
            icon={HiOutlineDotsHorizontal}
            onClick={() => setDialogActive(!dialogActive)}
          />}
          { isEditable && <Button 
            btnClass={ style.task__action }
            iconClass={ style.task__icon }
            type='button'
            title='Confirmar edição'
            icon={LuCheck}
            onClick={() => editNameTask(id, newTask)}
          />}
          <TaskAction open={dialogActive} id={id} name={newTask} setIsEditable={setIsEditable} setDialogActive={setDialogActive} /> 
        </div>
      </div>
    </li>
  )
}
