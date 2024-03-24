import styles from '@/styles/components/Navbar.module.css'
import { navbarState } from "@/stores/navbarStore";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getUser } from '@/utils/utils';

export default function Navbar() {
    const { page, setPage } = navbarState();
    const [user, setUser] = useState<any>();

    function handleClick(pageNumber: number) {
        const root = document.documentElement;

        if (pageNumber == 0) {
            root.style.setProperty('--main', 'var(--blue)');
            root.style.setProperty('--secondary', 'var(--green)');
        } else {
            root.style.setProperty('--main', 'var(--green)');
            root.style.setProperty('--secondary', 'var(--blue)');
        }

        setPage(pageNumber);
    }

    useEffect(() => {
        setUser(getUser());
    }, [])

    return (
        <nav className={styles['navbar']}>
            <div>
                <Link href={'/'}>
                    <button className={styles['logo-button']}>
                        <img className={styles['logo']} src="/icons/logo.png" alt="Logo" />
                        <h1 className={styles['logo-text']}>Stelle</h1>
                    </button>
                </Link>
            </div>
            <div className={styles['middle-div']}>
                <ul className={styles['navbar-buttons']}>
                    <li><button className={`${styles['button']} ${page == 0 && styles['selected-button']}`} onClick={() => handleClick(0)}>I want to hire</button></li>
                    <li><button className={`${styles['button']} ${page == 1 && styles['selected-button']}`} onClick={() => handleClick(1)}>I want to work</button></li>
                </ul>
            </div>
            <div className={styles['last-div']}>
                {user ?
                    <button className={styles['profile-button']}><img src="/icons/profile-photo-placeholder.png" alt="Profile photo placeholder" /></button>
                    :
                    <ul className={styles['auth-buttons']}>
                        <li><button className={`${styles['sign-up']}`}>Sign Up</button></li>
                        <li><button className={`${styles['log-in']}`}>Log In</button></li>
                    </ul>
                }
            </div>
            {/* <SearchBar /> */}
        </nav>
    )
}