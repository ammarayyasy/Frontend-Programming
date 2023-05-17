import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.navbar__brand}>
                    <h1>Cinemaindo App</h1>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>
                            <Link className={styles.navbar__a} to="/">Home</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link className={styles.navbar__a} to="/movie/create">Add Movie</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link className={styles.navbar__a} to="/movie/popular">Popular</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link className={styles.navbar__a} to="/movie/now">Now Playing</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link className={styles.navbar__a} to="/movie/top">Top Rated</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;