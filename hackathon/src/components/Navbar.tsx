import styles from '@/styles/components/Navbar.module.css'
import SearchBar from './SearchBar'

export default function Navbar() {
    return (
        <nav className={styles['navbar']}>
            {/* <button className={styles['logo-button']}>
                <img className={styles['logo']} src="/icons/logo.png" alt="Logo" />
                <h1 className={styles['logo-text']}>Gate</h1>
            </button>
            <SearchBar /> */}
        </nav>
    )
}