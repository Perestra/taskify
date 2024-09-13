import style from './NavList.module.scss'
import { NavLink } from 'react-router-dom';

type Props = {
  text: string;
  to: string;
}

export const NavList = ({ text, to }: Props) => {

  const styleActive = {
    color: 'var(--textPrimary)'
  }

  return (
    <li className={ style.list }>
      <NavLink 
        className={ style.list__link }
        to={ to } 
        style={({ isActive }) => isActive ? styleActive : undefined}
      >
        { text }
      </NavLink>
    </li>
  )
}
