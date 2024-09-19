import style from './Header.module.scss'

import links from '../../json/HeaderLinks.json'
import { NavList } from '../NavList/NavList';

type Link = {
    id: number;
    name: string;  
    url: string;
}

export const Header = () => {
    return (
        <header className={ style.header }>
            <nav className={ style.header__nav }>
                <ul className={ style.header__ul }>
                    {links.map((nav: Link) => (
                    <NavList key={ nav.id } text={ nav.name } to={ nav.url } />
                    ))}
                </ul>
            </nav>
        </header>
    );
  };