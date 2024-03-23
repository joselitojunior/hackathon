import styles from '@/styles/components/SearchBar.module.css';

export default function SearchBar() {
    return (
        <div className={styles['search-bar-div']}>
            <img className={styles['icon']} src="/icons/search.png" alt="Magnifying glass icon" />
            <div className={styles['search-bar-div-placeholder']}>
                <input className={styles['search-bar']} type="text" />
                <p className={styles['placeholder']}>Pesquisar por eventos</p>
            </div>
        </div>
    )
}