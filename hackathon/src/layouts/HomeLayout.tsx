import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from '@/styles/layouts/HomeLayout.module.css';

export default function HomeLayout({ children }: { children?: any }) {
    return (
        <div className={styles['page']}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}