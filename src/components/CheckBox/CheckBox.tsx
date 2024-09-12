import { useState } from 'react';
import style from './CheckBox.module.scss'
import { FaCheck } from "react-icons/fa6";

export const CheckBox = ({  }) => {

    const [checked, setChecked] = useState(false)

  return (
    <button 
        className={ style.button } 
        value='Completar' 
        type='button'
        onClick={ () => setChecked(!checked) }
    >
        {checked && <FaCheck className={ style.button__icon } />}
    </button>
  )
}