import styles from '@/styles/components/Select.module.css';

export default function Select({name=''}: {name?: string}) {
    return (
        <div className={styles['select']} id="category">
            {name}
            <div className={styles['polygon']}></div>
        </div>
    )
}