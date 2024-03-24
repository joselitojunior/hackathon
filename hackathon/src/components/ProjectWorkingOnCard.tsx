import styles from '@/styles/components/ProjectCard.module.css';
import { capitalize, getUser } from '@/utils/utils';
import { stat } from 'fs';
import { useEffect, useRef, useState } from 'react';

type CardProps = {
    title: string,
    proposals: number,
    description?: string,
    price: number,
    status: 'pending' | 'finish' | 'decide',
}

export default function Card({ title, proposals, description, price, status = 'pending' }: CardProps) {
    const descriptionRef = useRef<any>();
    const descriptionDivRef = useRef<any>();
    const [showMoreVisibility, setShowMoreVisibility] = useState(false);
    const [isShowingMore, setIsShowingMore] = useState(false);
    // const [userType, setUserType] = useState<any>(null);

    useEffect(() => {
        if (descriptionRef.current) {
            const element = descriptionRef.current;
            const originalDisplay = element.style.display;
            element.style.display = 'block';
            const height = element.clientHeight;
            const remValue = parseFloat(getComputedStyle(document.documentElement).fontSize);
            if (height > 6.8 * remValue) {
                setShowMoreVisibility(true);
            }
            element.style.display = originalDisplay;
        }
    }, [descriptionRef]);

    useEffect(() => {
        if (isShowingMore && descriptionRef.current && descriptionDivRef.current) {
            const description = descriptionRef.current;
            const descriptionDiv = descriptionDivRef.current
            description.style.display = 'block';
            descriptionDiv.style.height = 'unset';
        } else {
            const description = descriptionRef.current;
            const descriptionDiv = descriptionDivRef.current
            description.style.display = '-webkit-box';
            descriptionDiv.style.height = '9.733rem';

        }
    }, [isShowingMore])

    function handleClick() {
        setIsShowingMore(prev => !prev)
    }

    // useEffect(() => {
    //     const user = getUser();
    //     if (user) {
    //         setUserType(user.type);
    //     }
    // }, [])

    return (
        <div className={styles['card']}>
            <div className={styles['header']}>
                <p className={styles['title']}>{title}</p>
            </div>
            <div ref={descriptionDivRef} className={styles['description-div']}>
                <p ref={descriptionRef} className={styles['description']}>{description}</p>
                {showMoreVisibility && <button className={styles['show-more']} onClick={handleClick}>Show {isShowingMore ? 'less' : 'more'}</button>}
            </div>
            <div className={styles['footer']}>
                <p className={styles['price']}>Price: ${price}</p>
                <div className={styles['decision-buttons']}>
                    {status === 'finish' && <button className={styles['status-button']} style={{ backgroundColor: 'var(--green)' }}>Finish</button>}
                    {status === 'pending' && <button className={styles['status-button']} style={{ backgroundColor: 'var(--background)' }}>Pending</button>}
                    {status === 'decide' && <button className={styles['status-button']} style={{ backgroundColor: 'var(--green)' }}>Finish</button>}
                    {status === 'decide' && <button className={styles['status-button']} style={{ backgroundColor: 'var(--red)' }}>Validate</button>}
                </div>
            </div>
        </div>
    )
}