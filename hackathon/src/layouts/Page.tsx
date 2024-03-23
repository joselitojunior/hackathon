import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from '@/styles/layouts/Page.module.css';

export default function Page({ children }: { children?: any }) {
    return (
        <div className={styles['page']}>
            <div className={styles['navbar-children']}>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    )
}