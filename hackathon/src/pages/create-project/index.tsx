import Card from "@/components/ProjectWorkingOnCard";
import Page from "@/layouts/Page";
import styles from '@/styles/pages/MyProject.module.css';

export default function MyProjects() {
    return (
        <Page>
            <main className={styles['main']}>
                <div className={styles['header']}>
                    <h1 className={styles['title']}>Create a projects</h1>
                </div>
            </main>
        </Page>
    )
}