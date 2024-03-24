import ProjectCard from "@/components/ProjectOfferCard";
import FreelancerCard from "@/components/FreelancerCard";
import Page from "@/layouts/Page";
import { navbarState } from "@/stores/navbarStore";
import styles from '@/styles/pages/Offers.module.css';
import { getUser } from "@/utils/utils";
import { useEffect, useState } from "react";

export default function Offers() {
    const { page } = navbarState();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        setUser(getUser());
    }, [])

    if (user) {
        return (
            <Page>
                <main className={styles['main']}>
                    <div className={styles['header']}>
                        <h1 className={styles['title']}>Offers</h1>
                        <p className={styles['subtitle']}>Take a look at all of your offers received.</p>
                    </div>
                    <div className={styles['content']}>
                        <div className={styles['cards-div']}>
                            {user.type == 0 &&
                                <>
                                    <FreelancerCard name="Joselito Júnior" profession="Developer" price={30} reviews={82} stars={3} description="Eu sou fullstack" project='Image analysis received via Whatsapp'/>
                                    <FreelancerCard name="Joselito Júnior" profession="Developer" price={30} reviews={82} stars={3} description="Eu soaskjasnmkdjsanfjskakjdflasu fullstackEu soaskjasnmkdjsanfjskakjdflasu fullstackEu soaskjasnmkdjsanfjskakjdflasu fullstackEu soaskjasnmkdjsanfjskakjdflasu fullstackEu soaskjasnmkdjsanfjskakjdflasu fullstackEu soaskjasnmkdjsanfjskakjdflasu fullstackEu soaskjasnmkdjsanfjskakjdflasu fullstack" project='Image analysis received via Whatsapp'/>
                                    <FreelancerCard name="Joselito Júnior" profession="Developer" price={30} reviews={82} stars={3} description="Eu sou fullstack" project='Image analysis received via Whatsapp'/>
                                    <FreelancerCard name="Joselito Júnior" profession="Developer" price={30} reviews={82} stars={3} description="Eu sou fullstack" />
                                    <FreelancerCard name="Joselito Júnior" profession="Developer" price={30} reviews={82} stars={3} description="Eu sou fullstack" project='Image analysis received via Whatsapp'/>
                                    <FreelancerCard name="Joselito Júnior" profession="Developer" price={30} reviews={82} stars={3} description="Eu sou fullstack" project='Image analysis received via Whatsapp'/>
                                    <FreelancerCard name="Joselito Júnior" profession="Developer" price={30} reviews={82} stars={3} description="Eu sou fullstack" project='Image analysis received via Whatsapp'/>
                                </>
                            }
                            {user.type == 1 &&
                                <>
                                    <ProjectCard title="Image analysis received via Whatsapp" proposals={1} price={1150} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again" />
                                    <ProjectCard title="Image analysis received via Whatsapp" proposals={18} price={390} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up anI need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp againd then return the result of the analysis via whatsapp again" />
                                    <ProjectCard title="Image analysis received via Whatsapp" proposals={14} price={130} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again" />
                                    <ProjectCard title="Image analysis received via Whatsapp" proposals={4} price={1000} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set uI need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp againp and then return the result of the analysis via whatsapp again" />
                                    <ProjectCard title="Image analysis received via Whatsapp" proposals={4} price={680} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again" />
                                    <ProjectCard title="Image analysis received via Whatsapp" proposals={0} price={550} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again" />
                                    <ProjectCard title="Image analysis received via Whatsapp" proposals={3} price={450} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set upI need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again and then return the result of the analysis via whatsapp again" />
                                </>
                            }
                        </div>
                    </div>
                </main>
            </Page>
        )
    }
}