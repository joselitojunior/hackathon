import { confirmModalState } from '@/stores/confirmModalStore';
import styles from '@/styles/components/ConfirmModal.module.css';

type FilterModalProps = {
    setFilterModalVisibility: any,
}

export default function ConfirmModal() {
    const { visibility, setVisibility, func } = confirmModalState();

    if (visibility) {
        return (
            <>
                <div className={styles['bg']} onClick={() => setVisibility(false)}></div>
                <div className={styles['modal']}>
                    <div className={styles['header']}>
                        <h1>Are you sure you want to confirm?</h1>
                        <button className={styles['close-button']} onClick={() => setVisibility(false)}><img src="/icons/remove.png" alt="Remove icon" /></button>
                    </div>
                    <div className={styles['buttons-div']}>
                        <button className={styles['yes-button']} onClick={func}>Yes</button>
                        <button className={styles['cancel-button']} onClick={() => setVisibility(false)}>Cancel</button>
                    </div>
                </div>
            </>
        )
    }
}