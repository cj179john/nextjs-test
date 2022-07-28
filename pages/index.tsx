import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import Card from 'react-bootstrap/Card';

export default function Home({ allSchedules }) {
    const cardOnClick = (id: string) => () => {
        location.href = `/show/${id}`;
    };

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
                        <div key={id}>
                            <Card className={utilStyles.card} onClick={cardOnClick(show.id)}>
                                <Card.Img variant="top" src={show.image.medium} className={utilStyles.cardImg} />
                                <Card.Header className={utilStyles.boldText}>{show.name}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Show time: <Date dateString={airstamp} />
                                        <div dangerouslySetInnerHTML={{__html: show.summary}} />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
  const res = await fetch('https://api.tvmaze.com/schedule');
  const schedules = await res.json();

  return {
    props: {
      allSchedules: schedules
    }
  }
}
