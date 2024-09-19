import style from './TaskAction.module.scss'

import { Button } from '../Button/Button'
import { FiTrash2, FiEdit } from "react-icons/fi";
import { useTaskContext } from '../../hooks/useTaskContext';

type Props = {
  open: boolean;
  id: string;
  name: string;
  setIsEditable: (event: boolean) => void
  setDialogActive: (event: boolean) => void
}


export const TaskAction = ({ open, id, setIsEditable, setDialogActive }: Props) => {
  
  const { deleteTask, setIsDoneFalse } = useTaskContext()

  const statesHandler = () => {
    setIsEditable(true)
    setDialogActive(false)
    setIsDoneFalse(id)
  }

  return (
    <dialog open={ open } className={ style.dialog }>
      <div className={ style.dialog__container }>
        <div className={ style.dialog__delete }>
          <Button 
            key={id}
            text='Deletar' 
            type='button' 
            btnClass={ style.dialog__btn } 
            icon={ FiTrash2 } 
            iconClass={ style.dialog__icon }
            onClick={ () => deleteTask(id) }
          /> 
        </div>
        <div className={ style.dialog__edit }>
          <Button 
            key={id} 
            text='Editar' 
            type='button' 
            btnClass={ style.dialog__btn } 
            icon={ FiEdit } 
            iconClass={ style.dialog__icon }
            onClick={ () => statesHandler() }
          />
        </div>
      </div>
    </dialog>
  )
}
