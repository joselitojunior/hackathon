import styles from '@/styles/components/Navbar.module.css'
import { navbarState } from "@/stores/navbarStore";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getUser } from '@/utils/utils';
import { useRouter } from 'next/router';

export default function Navbar() {
    const { page, setPage } = navbarState();
    const router = useRouter();
    const [user, setUser] = useState<any>();
    const [selectedNavbarButton, setSelectedNavbarButton] = useState<number | null>(null);

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
                        <img className={styles['logo']} src="/icons/gray-logo.png" alt="Logo" />
                        <h1 className={styles['logo-text']}>Stelle</h1>
                    </button>
                </Link>
            </div>
            <div className={styles['middle-div']}>

                {user ?
                    user.type == 0 ?
                        <ul className={styles['navbar-buttons']}>
                            <li><Link href={'/find'}><button className={`${styles['button']} ${router.pathname == '/find' ? styles['selected-button'] : ''}`}>Find</button></Link></li>
                            <li><Link href={'/offers'}><button className={`${styles['button']} ${router.pathname == '/offers' ? styles['selected-button'] : ''}`}>Offers</button></Link></li>
                            <li><Link href={'/my-projects'}><button className={`${styles['button']} ${router.pathname == '/my-projects' ? styles['selected-button'] : ''}`}>My projects</button></Link></li>
                            <li><Link href={'/create-project'}><button className={`${styles['button']} ${router.pathname == '/create-project' ? styles['selected-button'] : ''}`}>Create project</button></Link></li>
                        </ul>
                        :
                        user.type == 1 &&
                        <ul className={styles['navbar-buttons']}>
                            <li><Link href={'/find'}><button className={`${styles['button']} ${router.pathname == '/find' ? styles['selected-button'] : ''}`}>Find</button></Link></li>
                            <li><Link href={'/offers'}><button className={`${styles['button']} ${router.pathname == '/offers' ? styles['selected-button'] : ''}`}>Offers</button></Link></li>
                            <li><Link href={'/my-projects'}><button className={`${styles['button']} ${router.pathname == '/my-projects' ? styles['selected-button'] : ''}`}>My projects</button></Link></li>
                        </ul>
                    :
                    <ul className={styles['navbar-buttons']}>
                        <li><button className={`${styles['button']} ${page == 0 && styles['selected-button']}`} onClick={() => handleClick(0)}>I want to hire</button></li>
                        <li><button className={`${styles['button']} ${page == 1 && styles['selected-button']}`} onClick={() => handleClick(1)}>I want to work</button></li>
                    </ul>
                }
            </div>
            <div className={styles['last-div']}>
                {user ?
                    <button className={styles['profile-button']}><img src="/icons/profile-photo-placeholder.png" alt="Profile photo placeholder" /></button>
                    :
                    <ul className={styles['auth-buttons']}>
                        <li><button className={`${styles['sign-up']}`}>Sign Up</button></li>
                        <li><Link href={'/login'}><button className={`${styles['log-in']}`}>Log In</button></Link></li>
                    </ul>
                }
            </div>
        </nav>
    )
}