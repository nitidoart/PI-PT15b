// import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from './Nav.module.css'
import PATHROUTES from '../helpers/PathRoutes.helper';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Link to={PATHROUTES.ABOUT}>About</Link>
            <Link to={PATHROUTES.HOME}>Home</Link>
            <Link to={PATHROUTES.FAVORITES}>Favorites</Link>
        </nav>
    )
};

export default Nav;

