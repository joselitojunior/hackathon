import Page from "@/layouts/HomeLayout";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import styles from '@/styles/pages/Login.module.css';

export default function LogIn() {
    const [username, setUsername] = useState<any>('');
    const [password, setPassword] = useState<any>('');
    const router = useRouter();

    function setCssVariables(user: any) {
        const root = document.documentElement;

        if (user.type == 0) {
            root.style.setProperty('--main', 'var(--blue)');
            root.style.setProperty('--secondary', 'var(--green)');
        } else if (user.type == 1) {
            root.style.setProperty('--main', 'var(--green)');
            root.style.setProperty('--secondary', 'var(--blue)');
        }
    }

    async function auth(username: string, password: string) {
        const response = await fetch('/api/logIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        return data;
    }

    async function logIn() {
        if (password && username) {
            const user = await auth(username, password);
            if (user) {
                setCssVariables(user);
                localStorage.setItem('user', JSON.stringify(user));
                router.push('/')
            }
        }
    }

    return (
        <Page>
            <main className={styles['main']}>
                <img src="/icons/gray-logo.png" alt="Logo" />
                <h1>Create an account</h1>
                <div className={styles['credentials']}>
                    <div className={styles['search-bar-div']}>
                        <input className={styles['search-bar']} value={username} onChange={(e) => setUsername(e.currentTarget.value)} type="text" />
                        {username == '' && <p className={styles['placeholder']}>Username</p>}
                    </div>
                    <div className={styles['search-bar-div']}>
                        <input className={styles['search-bar']} value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="text" />
                        {password == '' && <p className={styles['placeholder']}>Password</p>}
                    </div>
                </div>
                <button className={styles['login-button']} onClick={logIn}>Login</button>
            </main>
        </Page>
    )
}