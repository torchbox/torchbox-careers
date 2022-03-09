import type { NextPage } from 'next';
import type { JobPost } from 'lib/peopleHR';
import type { Job } from 'types/pages/Job';
import styles from 'styles/Job.module.scss';
import { getAllJobSlugs } from 'pages/api/jobs/slugs';
import { getJobPost } from 'pages/api/jobs/[slug]';
import { getJobPage } from 'lib/api';
import Layout from 'components/Layout';
import ClientLogos from 'components/ClientLogos';
import Benefits from 'components/Benefits';
import RichText from 'components/RichText';
import { ApplyButton } from 'components/Button';
import { getNumberOfActiveRoles } from 'pages/api/_peopleHR';

type JobPageProps = {
    preview: boolean;
    job: JobPost;
    jobsAvailable: number;
    content: Job;
};

const JobPosting: NextPage<JobPageProps> = ({
    preview,
    job,
    jobsAvailable,
    content,
}) => {
    const benefits =
        content.itemsCollection.items[0].benefitsListCollection.items.map(
            (item: any) => item.benefitName,
        );

    const clientLogos =
        content.itemsCollection.items[1].clientsCollection.items.map(
            (item: any) => item.clientLogo,
        );

    return (
        <Layout theme="LIGHT" preview={preview} jobsAvailable={jobsAvailable}>
            <div className={styles.pageContainer}>
                <div className={styles.contentContainer}>
                    <h1>{job.title}</h1>
                    <div className={styles.textContainer}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: job.description,
                            }}
                        ></div>
                    </div>
                </div>

                <Benefits
                    title={content.itemsCollection.items[0].benefitsTitle}
                    benefits={benefits}
                />

                <div className={styles.contentContainer}>
                    <div className={styles.textContainer}>
                        <h2 className={styles.hiringPolicyTitle}>
                            {content.hiringPolicyTitle}
                        </h2>
                        <RichText
                            theme="LIGHT"
                            content={content.hiringPolicyDescription}
                        />
                        <ApplyButton
                            title="Apply for this job"
                            url={job.jobURL}
                        >
                            Join the team and help make the world a better place
                        </ApplyButton>
                    </div>
                </div>

                <h2 className={styles.whoWeWorkWith}>Who we work with</h2>
                <ClientLogos logos={clientLogos} />
            </div>
        </Layout>
    );
};

export default JobPosting;

export async function getStaticProps({
    params,
    preview = false,
}: {
    params: { slug: string };
    preview: boolean;
}) {
    try {
        const job = await getJobPost(params.slug);
        const jobsAvailable = await getNumberOfActiveRoles();
        const content = await getJobPage(preview);
        if (!job) {
            return { notFound: true };
        }
        return {
            props: { preview, job, jobsAvailable, content },
            revalidate: 60 * 60, // After one hour, the cache expires and the page gets rebuilt.
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}

export async function getStaticPaths() {
    const allJobSlugs = await getAllJobSlugs();

    if (allJobSlugs) {
        return {
            paths: allJobSlugs,
            fallback: 'blocking',
        };
    }

    // If we can't find any job postings from peopleHR, don't create posting pages
    // Use fallback blocking so ISR gets triggered in the future and the page is generated when PeopleHR goes live.
    return {
        paths: [],
        fallback: 'blocking',
    };
}
