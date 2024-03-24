import Card from "@/components/FreelancerCard";
import Filter from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import styles from "@/styles/pages/Find.module.css";
import { useState } from "react";
import FreelancerFilterModal from "@/components/FreelancerFilterModal";

export default function findHire() {
    const [search, setSearch] = useState('');
    const [filterModalVisibility, setFilterModalVisibility] = useState(false);

    return (
        <>
            <main className={styles['main']}>
                <div className={styles['header']}>
                    <h1 className={styles['title']}>Find Freelancers</h1>
                    <div className={styles['filter-div']}>
                        <button className={styles['filter-text']} onClick={() => setFilterModalVisibility(true)}>Filters</button>
                        <div className={styles['filters']}>
                            <Filter name={'Video & Animation'} />
                            <Filter name={'$500 - $1000'} />
                            <Filter name={'Short-term (1-3 weeks)'} />
                        </div>
                    </div>
                </div>
                <div className={styles['content']}>
                    <ul className={styles['content-header']}>
                        <li><p><span>6</span> results found</p></li>
                        <li className={styles['search-bar-li']}><SearchBar search={search} setSearch={setSearch} /></li>
                    </ul>
                    <div className={styles['cards-div']}>
                        <Card name="Joselito Júnior" profession="Developer" price={30} reviews={82} stars={3} description="Eu sou fullstack" />
                        <Card name="Joselito Júnior" profession="Developer" price={30} reviews={82} stars={3} description="Eu soaskjasnmkdjsanfjskakjdflasu fullstackEu soaskjasnmkdjsanfjskakjdflasu fullstackEu soaskjasnmkdjsanfjskakjdflasu fullstackEu soaskjasnmkdjsanfjskakjdflasu fullstackEu soaskjasnmkdjsanfjskakjdflasu fullstackEu soaskjasnmkdjsanfjskakjdflasu fullstackEu soaskjasnmkdjsanfjskakjdflasu fullstack" />
                        <Card name="Joselito Júnior" profession="Developer" price={30} reviews={82} stars={3} description="Eu sou fullstack" />
                        <Card name="Joselito Júnior" profession="Developer" price={30} reviews={82} stars={3} description="Eu sou fullstack" />
                        <Card name="Joselito Júnior" profession="Developer" price={30} reviews={82} stars={3} description="Eu sou fullstack" />
                        <Card name="Joselito Júnior" profession="Developer" price={30} reviews={82} stars={3} description="Eu sou fullstack" />
                        <Card name="Joselito Júnior" profession="Developer" price={30} reviews={82} stars={3} description="Eu sou fullstack" />
                    </div>
                </div>
            </main>
            {filterModalVisibility && <FreelancerFilterModal setFilterModalVisibility={setFilterModalVisibility} />}
        </>
    )
}