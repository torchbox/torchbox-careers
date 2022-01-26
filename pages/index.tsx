import type { NextPage } from "next";
import styles from "styles/Home.module.scss";
import { getLandingPage } from "../lib/api";
import Layout from "../components/Layout";
import Image from "next/image";
import { LandingPage } from "types/LandingPage";

import RichText from "../components/RichText";

type LandingPageProps = {
    preview: boolean;
    landingPageContent: LandingPage;
};

const LandingPage: NextPage<LandingPageProps> = ({
    preview,
    landingPageContent,
}) => (
    <Layout preview={preview}>
        <div className={styles.container}>
            <h1 className={styles.title}>{landingPageContent.title}</h1>
            <p>This is a landing page preview mode demonstration.</p>
            <Image
                src={landingPageContent.heroImage.url}
                alt={landingPageContent.heroImage.description}
                width={landingPageContent.heroImage.width}
                height={landingPageContent.heroImage.height}
            />
            <p>{landingPageContent.metadataDescription}</p>
            <p>{landingPageContent.ctaTitle}</p>
            <RichText
                content={landingPageContent.ctaDescription}
                theme="LIGHT"
            />
        </div>
    </Layout>
);

export default LandingPage;

export async function getStaticProps({ preview = false }) {
    const landingPageContent = (await getLandingPage(preview)) ?? [];
    console.log("Test 1 ", JSON.stringify(landingPageContent.ctaDescription));
    return {
        props: { preview, landingPageContent },
    };
}
