import ConfirmModal from "@/components/ConfirmModal";
import "@/styles/globals.css";
import { getUser } from "@/utils/utils";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const [user, setUser] = useState<any>(undefined);

	useEffect(() => {
		const root = document.documentElement;

		if (user) {
			if (user.type == 0) {
				root.style.setProperty('--main', 'var(--blue)');
				root.style.setProperty('--secondary', 'var(--green)');
			} else if (user.type == 1) {
				root.style.setProperty('--main', 'var(--green)');
				root.style.setProperty('--secondary', 'var(--blue)');
			}
		}
	}, [user])

	useEffect(() => {
		setUser(getUser());
	}, [])

	if (user !== undefined) {
		return <>
			<Component {...pageProps} />
			<ConfirmModal/>
		</>;
	}
}
