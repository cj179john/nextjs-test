import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';

export default function Home() {
    const [allSchedules, setAllSchedules] = useState([]);

    useEffect(() => {
        const getAllSchedules = async () => {
            const result = await fetchData('https://api.tvmaze.com/schedule');
            if (!result) {
                return;
            }
            setAllSchedules(result);
        }
        getAllSchedules();
    }, []);

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={utilStyles.headingText}>
                <span>TV Show and web series database Create personalised schedules, Episode guide, cast, crew and character information</span>
            </div>
            <div className={utilStyles.mainContent}>
                <div className={utilStyles.cards}>
                    {allSchedules.map(({ id, show, airstamp}) => (
                        <Link key={id} href={`/show/${show.id}`}>

                            <Card className={utilStyles.card}>
                                <Card.Img variant="top" src={show.image.medium} className={utilStyles.cardImg} />
                                <Card.Header className={utilStyles.boldText}>{show.name}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Show time: <Date dateString={airstamp} />
                                        <div dangerouslySetInnerHTML={{__html: show.summary}} />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
