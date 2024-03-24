import Page from "@/layouts/Page";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function LogIn() {
    const usernameRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
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
        if (passwordRef.current && usernameRef.current) {
            const username = usernameRef.current.value;
            const password = passwordRef.current.value;
            const user = await auth(username, password);
            if (user) {
                setCssVariables(user);
                localStorage.setItem('user', JSON.stringify(user));
                router.push('/')
            }
        }
    }

    return (
        <div style={{ backgroundColor: 'var(--background)', height: '100vh' }}>
            <p>Username</p>
            <input ref={usernameRef} type="text" style={{ color: 'black' }} />
            <p>Password</p>
            <input ref={passwordRef} type="text" style={{ color: 'black' }} />
            <br />
            <button onClick={logIn}>Log In</button>
        </div>
    )
}