import style from './TaskAction.module.scss'

import { Button } from '../Button/Button'
import { FiTrash2, FiEdit } from "react-icons/fi";

type Props = {
  open: boolean;
}

export const TaskAction = ({ open }: Props) => {
  return (
    <dialog open={ open } className={ style.dialog }>
      <div className={ style.dialog__container }>
        <div className={ style.dialog__delete }>
          <Button 
            key={1}
            text='Deletar' 
            type='button' 
            btnClass={ style.dialog__btn } 
            icon={ FiTrash2 } 
            iconClass={ style.dialog__icon }
          /> 
        </div>
        <div className={ style.dialog__edit }>
          <Button 
            key={2} 
            text='Editar' 
            type='button' 
            btnClass={ style.dialog__btn } 
            icon={ FiEdit } 
            iconClass={ style.dialog__icon }
          />
        </div>
      </div>
    </dialog>
  )
}
