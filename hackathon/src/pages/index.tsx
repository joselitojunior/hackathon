import HomeLayout from '@/layouts/HomeLayout';
import { navbarState } from "@/stores/navbarStore";
import hire from "./index/hire";
import work from "./index/work";
import styles from "@/styles/pages/Home.module.css";

export default function Home() {
	const { page } = navbarState();

	return (
		<HomeLayout>
			<svg className={styles['blob']} width="653" height="1024" viewBox="0 0 653 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M150.491 -18.0673C282.496 10.2385 379.291 107.302 465.395 211.226C557.426 322.305 670.412 441.731 649.665 584.421C628.95 726.887 473.876 792.54 366.86 888.905C240.953 1002.28 149.15 1193.95 -20.2382 1187.65C-193.52 1181.21 -322.063 1015.88 -398.681 860.425C-463.546 728.817 -414.986 581.754 -390.111 437.189C-366.427 299.546 -367.07 145.633 -260.203 55.6363C-149.646 -37.4666 9.10656 -48.3843 150.491 -18.0673Z" fill="#111111" fillOpacity="0.2" />
			</svg>
			{page == 0 &&
				hire()
			}
			{page == 1 &&
				work()
			}
		</HomeLayout>
	);
}