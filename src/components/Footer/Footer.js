import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h1 className={styles.footer__title}>Cinemaindo App</h1>
                <p className={styles.footer__author}>Created by Ammarayyasy</p>
            </footer>
        </div>
    )
}

export default Footer;