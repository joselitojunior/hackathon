import Card from "@/components/ProjectCard";
import Filter from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import styles from "@/styles/pages/Find.module.css";
import { useEffect, useState } from "react";
import ProjectFilterModal from "@/components/ProjectFilterModal";
import Page from "@/layouts/Page";

export default function FindWork() {
    const [search, setSearch] = useState('');
    const [filterModalVisibility, setFilterModalVisibility] = useState(false);

    const [data, setData] = useState<any>();

    async function getData() {
        const response = await fetch('/api/getProjects');
        const data = await response.json()
        setData(data);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Page>
            <main className={styles['main']}>
                <div className={styles['header']}>
                    <h1 className={styles['title']}>Find Projects</h1>
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
                        {data?.filter((project: any) => project?.project.name.toLowerCase().includes(search.toLocaleLowerCase()) || project?.project.description.toLowerCase().includes(search.toLocaleLowerCase()) || (search == ''))?.map((project: any) => {
                            return (
                                <Card title={project.project.name} proposals={1} price={project.project.budget} description={project.project.description} />
                            )
                        })}
                    </div>
                </div>
            </main>
            {filterModalVisibility && <ProjectFilterModal setFilterModalVisibility={setFilterModalVisibility} />}
        </Page>
    )
}