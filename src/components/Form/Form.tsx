import { FormEvent, useState } from 'react'
import style from './Form.module.scss'

import { FiCheckSquare } from "react-icons/fi";
import { Button } from '../../components/Button/Button';

export const Form = () => {

    const [task, setTask] = useState('')

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault()
        setTask('')
    }

  return (
    <section className={ style.section }>
        <div className={ style.section__container }>
            <div className={ style.section__btn }>
                <Button 
                    btnClass={ style.section__iconDiv }
                    iconClass={ style.section__icon }
                    type='button' 
                    icon={FiCheckSquare}
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
            />
            <span className={ style.section__remaining }>2 Tarefas restantes</span>
        </div>
      </section>
  )
}
