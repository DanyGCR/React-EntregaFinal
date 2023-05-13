import styles from './Header.css';
import Logo from '../Logo/Logo';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className={styles.Header}>

            <Link to="WWW.Kurama3D.Com">
                <Logo className={styles.Logo}/>
            </Link>

           
            <h2 className={styles.titulo}>
                Kurama 3D
            </h2>
          

            <Link to='/'>
                <h3 className={styles.subtitulo}>
                    Impresiones 3D
                </h3>
            </Link>

        </header>
    );
}

export default Header;


//Ruta de acceso a la pagina web
//Titulo del proyecto y ocupacion