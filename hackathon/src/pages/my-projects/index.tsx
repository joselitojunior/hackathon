import Card from "@/components/ProjectWorkingOnCard";
import Page from "@/layouts/Page";
import styles from '@/styles/pages/MyProject.module.css';

export default function MyProjects() {
    return (
        <Page>
            <main className={styles['main']}>
                <div className={styles['header']}>
                    <h1 className={styles['title']}>My projects</h1>
                    <p className={styles['subtitle']}>Project you are working on!</p>
                </div>
                <div className={styles['content']}>
                    <div className={styles['cards-div']}>
                        <Card status="pending" title="Image analysis received via Whatsapp" proposals={1} price={1150} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again" />
                        <Card status="decide" title="Image analysis received via Whatsapp" proposals={18} price={390} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up anI need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp againd then return the result of the analysis via whatsapp again" />
                        <Card status="pending" title="Image analysis received via Whatsapp" proposals={14} price={130} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again" />
                        <Card status="decide" title="Image analysis received via Whatsapp" proposals={4} price={1000} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set uI need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp againp and then return the result of the analysis via whatsapp again" />
                        <Card status="pending" title="Image analysis received via Whatsapp" proposals={4} price={680} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again" />
                        <Card status="pending" title="Image analysis received via Whatsapp" proposals={0} price={550} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again" />
                        <Card status="decide" title="Image analysis received via Whatsapp" proposals={3} price={450} description="I need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set upI need to analyze an image received by whatsapp and analyze the image according to the prompt I am going to set up and then return the result of the analysis via whatsapp again and then return the result of the analysis via whatsapp again" />
                    </div>
                </div>
            </main>
        </Page>
    )
}