import styles from '@/styles/components/ProjectOfferCard.module.css';
import { useEffect, useRef, useState } from 'react';

type CardProps = {
    title: string,
    proposals: number,
    description?: string,
    price: number,
}

export default function Card({ title, proposals, description, price }: CardProps) {
    const descriptionRef = useRef<any>();
    const descriptionDivRef = useRef<any>();
    const [showMoreVisibility, setShowMoreVisibility] = useState(false);
    const [isShowingMore, setIsShowingMore] = useState(false);

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
                <p className={styles['price']}>{'Maria'} offers: ${price}</p>
                <div className={styles['decision-buttons']}>
                    <button className={styles['chat']}>Chat</button>
                    <button className={styles['accept-button']}>Accept</button>
                    <button className={styles['decline-button']}>Decline</button>
                </div>
            </div>
        </div>
    )
}