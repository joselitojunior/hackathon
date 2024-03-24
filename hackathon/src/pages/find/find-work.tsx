import Card from "@/components/ProjectCard";
import Filter from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import styles from "@/styles/pages/Find.module.css";
import { useState } from "react";
import ProjectFilterModal from "@/components/ProjectFilterModal";

export default function findHire() {
    const [search, setSearch] = useState('');
    const [filterModalVisibility, setFilterModalVisibility] = useState(false);

    return (
        <>
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
                        <li><p><span>6</span> results found</p></li>
                        <li className={styles['search-bar-li']}><SearchBar search={search} setSearch={setSearch} /></li>
                    </ul>
                    <div className={styles['cards-div']}>
                        <Card title="Image analysis received via Whatsapp" proposals={1} price={1150} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again" />
                        <Card title="Image analysis received via Whatsapp" proposals={18} price={390} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up anI need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp againd then return the result of the analysis via whatsapp again" />
                        <Card title="Image analysis received via Whatsapp" proposals={14} price={130} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again" />
                        <Card title="Image analysis received via Whatsapp" proposals={4} price={1000} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set uI need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp againp and then return the result of the analysis via whatsapp again" />
                        <Card title="Image analysis received via Whatsapp" proposals={4} price={680} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again" />
                        <Card title="Image analysis received via Whatsapp" proposals={0} price={550} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again" />
                        <Card title="Image analysis received via Whatsapp" proposals={3} price={450} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set upI need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again and then return the result of the analysis via whatsapp again" />
                    </div>
                </div>
            </main>
            {filterModalVisibility && <ProjectFilterModal setFilterModalVisibility={setFilterModalVisibility} />}
        </>
    )
}