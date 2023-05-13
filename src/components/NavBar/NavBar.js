import styles from './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
                            
            <div className={styles.Categories}>

                <NavLink to={`/category/Corporativa`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Corporativa
                </NavLink>

                <NavLink to={`/category/Ambiental`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Ambiental
                </NavLink>

                <NavLink to={`/category/Turística`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Turística
                </NavLink>

                <NavLink to={`/category/Vial`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Vial
                </NavLink>

                <NavLink to={`/category/Seguridad`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Seguridad
                </NavLink>
               
                <CartWidget className={styles.CartWidget} />

            </div>
        </nav>
    )
}

export default NavBar