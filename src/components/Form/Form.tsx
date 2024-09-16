import style from './Form.module.scss'
import { FormEvent, useState } from 'react'

import { FiCheckSquare } from "react-icons/fi";
import { Button } from '../../components/Button/Button';
import { useTaskContext } from '../../hooks/useTaskContext';

export const Form = () => {

    const [task, setTask] = useState('')
    const { RemainingTasks, addTask, cleanCompletedTasks, setAllTasksCompleted } = useTaskContext()

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault()
        addTask(task)
        setTask('')
    }

  return (
    <section className={ style.section }>
        <div className={ style.section__container }>
            <div className={ style.section__btn }>
                <Button 
                    btnClass={ style.section__iconDiv }
                    iconClass={ `${style.section__icon} ${RemainingTasks() === 0 && style.section__iconActive}` }
                    type='button' 
                    icon={FiCheckSquare}
                    onClick={ () => setAllTasksCompleted() }
                />
            </div>
            <form className={ style.section__form } onSubmit={onSubmitHandler}>
                <input className={ style.section__input } 
                    type="text"
                    value={task}
                    placeholder='Adicione uma tarefa...'
                    onChange={event => setTask(event.target.value)}
                />
            </form>
        </div>
        <div className={ style.section__infos }>
            <Button 
                btnClass={ style.section__clean }
                text='Limpar completas'
                type='button' 
                onClick={ () => cleanCompletedTasks()  }
            />
            <span className={ style.section__remaining }>{RemainingTasks()} Tarefas restantes</span>
        </div>
      </section>
  )
}
