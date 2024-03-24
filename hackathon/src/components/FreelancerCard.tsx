import { confirmModalState } from '@/stores/confirmModalStore';
import styles from '@/styles/components/FreelancerCard.module.css';
import { useEffect, useRef, useState } from 'react';

type CardProps = {
    name: string,
    profession: string,
    stars: number,
    reviews: number,
    description?: string,
    price: number,
    project?: string,
}

export default function Card({ name, profession, stars, reviews, description, price, project }: CardProps) {
    const descriptionRef = useRef<any>();
    const [showMoreVisibility, setShowMoreVisibility] = useState(false);
    const descriptionDivRef = useRef<any>();
    const [isShowingMore, setIsShowingMore] = useState(false);
    const { setVisibility, setFunc } = confirmModalState();


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

    function hire() {
        setVisibility(true);
    }

    function decline() {
        setVisibility(true);
    }

    return (
        <div className={styles['card']}>
            <div className={styles['header']}>
                <img className={styles['photo-profile-placeholder']} src="icons/profile-photo-placeholder.png" alt="Profile photo placeholder" />
                <div className={styles['freelancer-info']}>
                    <p className={styles['name']}>{name}</p>
                    <p className={styles['profession']}>{profession}</p>
                </div>
                <div className={styles['stars-div']}>
                    <div className={styles['stars']}>
                        {Array(stars).fill(undefined).map(() => {
                            return yellowStar();
                        })}
                        {Array(5 - stars).fill(undefined).map(() => {
                            return star();
                        })}
                    </div>
                    <p>{reviews} reviews</p>
                </div>
            </div>
            <div ref={descriptionDivRef} className={styles['description-div']}>
                <p ref={descriptionRef} className={styles['description']}>{description}</p>
                {showMoreVisibility && <button className={styles['show-more']} onClick={handleClick}>Show more</button>}
            </div>
            <div className={styles['footer']}>
                <div>
                    <p className={styles['price']}>Price per hour: ${price}</p>
                    {project && <p className={styles['project']}>Project: {project}</p>}
                </div>
                <div className={styles['decision-buttons']}>
                    <button className={styles['hire-button']} onClick={hire}>Hire</button>
                    {project && <button className={styles['decline-button']} onClick={decline}>Decline</button>}
                </div>
            </div>
        </div>
    )
}

function star() {
    return (
        <svg className={styles['star']} viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.54894 0.927049C9.8483 0.00573857 11.1517 0.00574037 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z" fill="#D8D8D8" />
        </svg>
    )
}

function yellowStar() {
    return (
        <svg className={styles['star']} viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.54894 0.927049C9.8483 0.00573857 11.1517 0.00574037 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z" fill="var(--yellow)" />
        </svg>
    )
}