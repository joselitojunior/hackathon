import styles from "@/styles/pages/Find.module.css";

export default function findWork() {
	return (
		<main className={styles['main']}>
			<div className={styles['content']}>
				<h1 className={styles['main-text']}>Find projects</h1>
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
					<button className={styles['find-button']}>Find Freelancer <img src="/icons/arrow.png" alt="Arrow icon" /></button>
				</div>
			</div>
			<img className={styles['illustration']} src="/illustrations/find-freelancers.png" alt="Illustration" />
		</main>
	)
}