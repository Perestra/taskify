import style from './CheckBox.module.scss'
import { FaCheck } from "react-icons/fa6";
import { useTaskContext } from '../../hooks/useTaskContext';

type Props = {
id: string;
isDone: boolean;
}

export const CheckBox = ({ id, isDone }: Props) => {

  const { isDoneToggle } = useTaskContext()

  return (
    <button 
      className={ style.button } 
      value='Completar' 
      type='button'
      onClick={ () => isDoneToggle(id) }
    >
      {isDone && <FaCheck className={ style.button__icon } />}
    </button>
  )
}