import { ImageTypes } from 'types/Base';
import Link from 'next/link';
import styles from './ComeWorkForYou.module.scss';
import { Image } from '../../Image/Image';

type ComeWorkForYouProps = {
    image: ImageTypes;
    children: React.ReactNode;
};

export const ComeWorkForYou = ({ image, children }: ComeWorkForYouProps) => (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h2 className={styles.title}>
                Come work for{' '}
                <span aria-hidden="true" className={styles.strikethrough}>
                    us
                </span>{' '}
                <span className={styles.emphasis}>you</span>.
            </h2>
            <div className={styles.richText}>{children}</div>
            <Link href="/employee-owned-trust">
                <a className="underline-link underline-link--white">
                    Employee ownership benefits
                </a>
            </Link>
            <div className={styles.background}></div>
        </div>
        <div className={styles.image}>
            <Image src={image.url} alt={image.description} />
        </div>
    </div>
);

export default ComeWorkForYou;
