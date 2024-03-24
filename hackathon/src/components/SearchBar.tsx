import styles from '@/styles/components/SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({ search, setSearch }: { search?: string, setSearch: any }) {
    return (
        <div className={styles['search-bar-div']}>
            <img className={styles['icon']} src="/icons/search.png" alt="Magnifying glass icon" />
            <div className={styles['search-bar-div-placeholder']}>
                <input className={styles['search-bar']} value={search} onChange={(e) => setSearch(e.currentTarget.value)} type="text" />
                {search == '' && <p className={styles['placeholder']}>Search</p>}
            </div>
        </div>
    )
}