import styles from "@/styles/pages/Find.module.css";

export default function findHire() {
    return (
        <main className={styles['main']}>
            <div>
                <h1 className={styles['title']}>Find freelancers</h1>
                <button className={styles['filter']}>Filters</button>
            </div>
        </main>
    )
}