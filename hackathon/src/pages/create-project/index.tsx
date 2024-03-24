import Page from "@/layouts/Page";
import { confirmModalState } from "@/stores/confirmModalStore";
import styles from '@/styles/pages/CreateProject.module.css';
import { useState } from "react";

export default function MyProjects() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const { setVisibility, setFunc } = confirmModalState();

    function create() {
        setVisibility(true);
    }

    return (
        <Page>
            <main className={styles['main']}>
                <h1 className={styles['title']}>Create a project</h1>
                <div className={styles['content']}>
                    <div>
                        <p>Type, skills required and budget range</p>
                        <div className={styles['filters']}>
                            <div className={styles['select']} id="category">
                                Type
                                <div className={styles['polygon']}></div>
                            </div>
                            <div className={styles['select']} id="category">
                                Skills
                                <div className={styles['polygon']}></div>
                            </div>
                            <div className={styles['select']} id="category">
                                Budget
                                <div className={styles['polygon']}></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>Project title</p>
                        <div className={styles['input-div']}>
                            <div className={styles['input-div-placeholder']}>
                                <input className={styles['input-bar']} value={name} onChange={(e) => setName(e.currentTarget.value)} type="text" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>Project description</p>
                        <textarea name="" id="" cols={30} rows={10}></textarea>
                    </div>

                    <button className={styles['ok-button']} onClick={create}>Create project</button>
                </div>
            </main>
        </Page>
    )
}