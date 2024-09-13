import React from 'react'

type Props = {
  btnClass?: string;
  text?: string;
  icon?: React.ElementType;
  type: 'button' | 'submit' | 'reset';
  iconClass?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ btnClass, text, icon: Icon, type, iconClass, onClick }: Props) => {
  return (
    <button 
      className={ btnClass }
      aria-label={ text }
      type={ type }
      onClick={ () => onClick }
    >
      {Icon && <Icon className={ iconClass } />}
      <span>{ text }</span>
    </button>
  )
}
