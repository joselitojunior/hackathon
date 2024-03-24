import styles from '@/styles/components/Filter.module.css';

export default function Filter({name}: {name?: string}) {
    return (
        <div className={styles['filter']}>
            <button><img src="icons/remove.png" alt="Remove icon" /></button>
            <p>{name}</p>
        </div>
    )
}