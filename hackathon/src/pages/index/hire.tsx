import styles from "@/styles/pages/Home.module.css";
import Link from "next/link";

export default function hire() {
	return (
		<main className={styles['main']}>
			<div className={styles['content']}>
				<h1 className={styles['main-text']}>Find <span>freelancers</span><br />anywhere, all in <span>one place</span></h1>
				<div className={styles['selects-div']}>
					<div className={styles['select']} id="category">
						Category
						<div className={styles['polygon']}></div>
					</div>
					<div className={styles['select']} id="skills">
						Skills
						<div className={styles['polygon']}></div>
					</div>
					<div className={styles['select']} id="type">
						Type of Professional
						<div className={styles['polygon']}></div>
					</div>
					<Link href={'/find'}><button className={styles['find-button']}>Find Freelancer<img src="/icons/arrow.png" alt="Arrow icon" /></button></Link>
				</div>
			</div>
			<img className={styles['illustration']} src="/illustrations/find-freelancers.png" alt="Illustration" />
		</main>
	)
}