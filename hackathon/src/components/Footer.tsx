import styles from '@/styles/components/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles['footer']}>
            <p className={styles['copyright']}>Copyright © 2024 Stelle. All rights reserved.</p>
            <ul className={styles['social-medias']}>
                <li><button><img src="/icons/instagram.png" alt="Instagram logo" /></button></li>
                <li><button><img src="/icons/twitter.png" alt="Twitter logo" /></button></li>
                <li><button><img src="/icons/linkedin.png" alt="LinkedIn logo" /></button></li>
            </ul>
            <ul className={styles['terms']}>
                <li><button>Privacy Policy</button></li>
                <li><button>Terms of Use</button></li>
            </ul>
        </footer>
    )
}