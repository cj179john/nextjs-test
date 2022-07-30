import Head from 'next/head';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout, { siteTitle } from '../../components/layout';
import ReactStars from "react-rating-stars-component";
import showStyles from './show.module.css';
import { convertArrayToString } from '../../utils';

const Show = () => {
    const router = useRouter();

    const [show, setShow] = useState(null);
    const [casts, setCasts] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const { id } = router.query;

    useEffect(() => {
        const getShowById = async () => {
            if (!id) {
                return;
            }
            const resp = await fetch(`https://api.tvmaze.com/shows/${id}`)
            if (resp.status !== 200) {
                setNotFound(true)
                return;
            }
            const showDetails = await resp.json();
            if (showDetails.rating?.average > 5) {
                showDetails.rating.average = 5;
            }
            setShow(showDetails);
        }

        const getCastsById = async () => {
            if (!id) {
                return;
            }
            const resp = await fetch(`https://api.tvmaze.com/shows/${id}/cast`)
            const castDetails = await resp.json();
            setCasts(castDetails);
        }

        getShowById();

        if (show) {
            getCastsById();
        }

    }, [id]);

    if (notFound) {
        return <Layout home={false}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <p>Show not found</p>
        </Layout>
    }

    return (
        !show ? <div>loading....</div>
            : <Layout home={false}>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section className={showStyles.showSection}>
                    <div className={showStyles.showImg}><img src={show.image.original}></img></div>
                    <div className={showStyles.showDescriptions}>
                        <div className={showStyles.showRating}>
                            <ReactStars
                                count={5}
                                value={show.rating.average}
                                size={24}
                                edit={false}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                            <span className={showStyles.showRatingNumber}>{show.rating.average}/5</span>
                        </div>

                        <h2>{show.name}</h2>
                        <div dangerouslySetInnerHTML={{__html: show.summary}} />
                    </div>

                </section>
                <section className={showStyles.showSection}>
                    <div className={showStyles.showInfo}>
                        <h3>Show Info</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Streamed on</td>
                                    <td>{show.network?.name || 'No Available'}</td>
                                </tr>
                                <tr>
                                    <td>Schedule</td>
                                    <td>{convertArrayToString(show.schedule?.days || [])}</td>
                                </tr>

                                <tr>
                                    <td>Status</td>
                                    <td>{show.status || 'No Available'}</td>
                                </tr>

                                <tr>
                                    <td>Genres</td>
                                    <td>{convertArrayToString(show.genres) || 'No Available'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={showStyles.showCasts}>
                        <h3>Starring</h3>
                        <table>
                            <tbody>
                                {casts &&
                                    casts.map(cast => (
                                        <tr key={cast.id}>
                                            <td className={showStyles.thumbnail}><img src={cast.person.image?.medium}/>{!cast.person.image?.medium && (<span>No Image</span>)}</td>
                                            <td className={showStyles.thumbnail}>{cast.person.name}</td>
                                            <td>{cast.character.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                </section>
            </Layout>)
}

export default Show