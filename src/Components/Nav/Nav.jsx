import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (<nav className={s.nav}>

        <ul>
            <li>
                <NavLink to=""
                         className={({isActive})=>isActive ? s.activeLnk : ''}>
                         Profile   </NavLink>
            </li>
            <li>
                <NavLink to="/dialogs"
                         className={({isActive})=>isActive ? s.activeLnk : undefined}>
                         Dialogs   </NavLink>
            </li>
            <li>
                <NavLink to="/mus"
                         className={({isActive})=>isActive ? s.activeLnk : undefined}>
                         Music   </NavLink>
            </li>
            <li>
                <NavLink to="/news"
                         className={({isActive})=>isActive ? s.activeLnk : undefined}>
                         News   </NavLink>
            </li>
            <li>
                <NavLink to="/set"
                         className={({isActive})=>isActive ? s.activeLnk : undefined}>
                         Settings   </NavLink>
            </li>
        </ul>
    </nav>)
}

export default Nav