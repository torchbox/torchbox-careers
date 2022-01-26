import type { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

import HomepageSubnav from 'components/HomepageSubnav';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Vercel Setup</h1>
            <HomepageSubnav title="We are on a mission" jobs={3}>
                <p>
                    For over 20 years, we’ve been devoted to delivering
                    outstanding work, while making a positive impact on society.
                </p>

                <p>
                    We create deeper meaning that joins the dots. Because our
                    work doesn’t exist in a bubble. It has the potential to
                    create more opportunities, better lives and deliver lasting
                    value, for everyone.{' '}
                </p>

                <p>
                    Here’s a taste of the incredible organisations we partner
                    with:
                </p>
            </HomepageSubnav>
        </div>
    );
};

export default Home;
