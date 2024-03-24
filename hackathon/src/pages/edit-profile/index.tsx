import Page from "@/layouts/Page";
import { confirmModalState } from "@/stores/confirmModalStore";
import styles from '@/styles/pages/CreateProject.module.css';
import { useState } from "react";

export default function MyProjects() {
    const [career, setCareer] = useState('');
    const [price, setPrice] = useState<any>();
    const [description, setDescription] = useState('');
    const { setVisibility, setFunc } = confirmModalState();

    function edit() {
        setVisibility(true);
    }

    return (
        <Page>
            <main className={styles['main']}>
                <h1 className={styles['title']}>Edit profile</h1>
                <div className={styles['content']}>
                    <div>
                        <p>Category, skills and type of professional</p>
                        <div className={styles['filters']}>
                            <div className={styles['select']} id="category">
                                Category
                                <div className={styles['polygon']}></div>
                            </div>
                            <div className={styles['select']} id="category">
                                Skills
                                <div className={styles['polygon']}></div>
                            </div>
                            <div className={styles['select']} id="category">
                                Type
                                <div className={styles['polygon']}></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div>
                            <p>Career</p>
                            <div className={styles['input-div']}>
                                <div className={styles['input-div-placeholder']}>
                                    <input className={styles['input-bar']} value={career} onChange={(e) => setCareer(e.currentTarget.value)} type="text" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Price per hour</p>
                            <div className={styles['input-div']}>
                                <div className={styles['input-div-placeholder']}>
                                    <input className={styles['input-bar']} value={price} onChange={(e) => setPrice(e.currentTarget.value)} type="text" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>About you</p>
                        <textarea name="" id="" cols={30} rows={10}></textarea>
                    </div>

                    <button className={styles['ok-button']} onClick={edit}>Edit profile</button>
                </div>
            </main>
        </Page>
    )
}