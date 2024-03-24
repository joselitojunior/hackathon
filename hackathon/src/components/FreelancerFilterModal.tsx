import styles from '@/styles/components/FilterModal.module.css';

type FilterModalProps = {
    setFilterModalVisibility: any,
}

export default function FreelancerFilterModal({ setFilterModalVisibility }: FilterModalProps) {
    return (
        <>
            <div className={styles['bg']} onClick={() => setFilterModalVisibility(false)}></div>
            <div className={styles['modal']}>
                <div className={styles['header']}>
                    <h1>Search for a freelancer</h1>
                    <button className={styles['close-button']} onClick={() => setFilterModalVisibility(false)}><img src="/icons/remove.png" alt="Remove icon" /></button>
                </div>
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
                        Type of Professional
                        <div className={styles['polygon']}></div>
                    </div>
                </div>
                <button className={styles['filter-button']}>Find freelancers<img src="/icons/arrow.png" alt="Arrow icon" /></button>
            </div>
        </>
    )
}