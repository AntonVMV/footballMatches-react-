import { NavLink } from "react-router-dom";
import "./style.css";

const navLinks = ['matches', 'news'];

const Navigation = () => {

    return (
        <ul className="nav__list">
            {navLinks.map( (item, index) => {
                return (
                    <li key={index}>               
                        <NavLink exact to={item === 'news' ? '/' : `/${item}`} 
                        className="nav__list_link" 
                        activeClassName="nav__list_link_active">{item}</NavLink>
                    </li>
                )
            })}
        </ul>
    )
}

export default Navigation;