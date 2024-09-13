import React, { FormEvent, useState } from 'react'
import style from './Home.module.scss'

import { FiCheckSquare } from "react-icons/fi";
import { Button } from '../../components/Button/Button';

export const Home = () => {

  const [task, setTask] = useState('')

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault()
    setTask('')
  }
  
  return (
    <main className={ style.main }>
      <section className={ style.main__section }>
        <Button 
          btnClass={ style.main__iconDiv }
          iconClass={ style.main__icon }
          type='button' 
          icon={FiCheckSquare}
        />
        <form className={ style.main__form } onSubmit={onSubmitHandler}>
          <input className={ style.main__input } 
            type="text"
            value={task}
            placeholder='Adicione uma tarefa...'
            onChange={event => setTask(event.target.value)}
          />
        </form>
      </section>
    </main>
  )
}
