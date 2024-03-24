import Card from "@/components/FreelancerCard";
import Filter from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import styles from "@/styles/pages/Find.module.css";
import { useEffect, useState } from "react";
import FreelancerFilterModal from "@/components/FreelancerFilterModal";
import Page from "@/layouts/Page";

export default function FindHire() {
    const [search, setSearch] = useState('');
    const [filterModalVisibility, setFilterModalVisibility] = useState(false);
    const [data, setData] = useState<any>();

    useEffect(() => {
        async function getData() {
            const response = await fetch('/api/getFreelancers');
            setData(await response.json());
        }
        getData()
    }, [])

    return (
        <Page>
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
                        <li><p><span>{data?.length}</span> results found</p></li>
                        <li className={styles['search-bar-li']}><SearchBar search={search} setSearch={setSearch} /></li>
                    </ul>
                    <div className={styles['cards-div']}>
                        {data?.filter((freelancer: any) => freelancer.user.name.toLowerCase().includes(search.toLocaleLowerCase()) || freelancer.profession.toLowerCase().includes(search.toLocaleLowerCase()) || (search == ''))?.map((freelancer: any) => {
                            return (
                                <Card name={freelancer.user.name} profession={freelancer.profession} price={freelancer.price_per_hour} reviews={82} stars={3} description={freelancer.description} />
                            )
                        })}
                    </div>
                </div>
            </main>
            {filterModalVisibility && <FreelancerFilterModal setFilterModalVisibility={setFilterModalVisibility} />}
        </Page>
    )
}