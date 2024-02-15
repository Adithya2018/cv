import styles from './NavBar.module.css';

export const NavBar = () => {
    return <nav className={styles.navbar_container}>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
}