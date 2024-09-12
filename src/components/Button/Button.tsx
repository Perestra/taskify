import React from 'react'

type Props = {
    text: string;
    icon: React.ElementType;
    onClick: (event: React.MouseEventHandler<HTMLButtonElement>) => void;
}

export const Button = ({ text, icon: Icon, onClick }: Props) => {
  return (
    <button 
        aria-label={ text }
        type='button'
        onClick={ () => onClick }
    >
        <Icon />
        <span>{ text }</span>
    </button>
  )
}
