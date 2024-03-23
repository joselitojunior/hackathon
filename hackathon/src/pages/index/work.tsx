import styles from "@/styles/pages/Home.module.css";

export default function work() {
	return (
		<main className={styles['main']}>
			<div className={styles['content']}>
				<h1 className={styles['main-text']}>Find <span>projects</span><br />anywhere, all in <span>one place</span></h1>
				<div className={styles['selects-div']}>
					<div className={styles['select']} id="category">
						Category
						<div className={styles['polygon']}></div>
					</div>
					<div className={styles['select']} id="skills">
						Budget Range
						<div className={styles['polygon']}></div>
					</div>
					<div className={styles['select']} id="type">
						Duration
						<div className={styles['polygon']}></div>
					</div>
					<button className={styles['find-button']}>Find Project <img src="/icons/arrow.png" alt="Arrow icon" /></button>
				</div>
			</div>
			<img className={styles['illustration']} src="/illustrations/find-project.png" alt="Illustration" />
		</main>
	)
}