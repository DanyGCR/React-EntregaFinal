import styles from './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
                            
            <div className={styles.Categories}>

                <NavLink to={`/category/Tazas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Tazas
                </NavLink>

                <NavLink to={`/category/Macetas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Macetas
                </NavLink>

                <NavLink to={`/category/Muñecos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Muñecos
                </NavLink>
               
                <CartWidget className={styles.CartWidget} />

            </div>
        </nav>
    )
}

export default NavBar