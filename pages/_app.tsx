/* eslint-disable no-console */
import { useEffect } from 'react';
import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import TagManager from 'react-gtm-module';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';

function MyApp({ Component, pageProps }: AppProps) {
    Router.events.on('routeChangeComplete', (url) => {
        clearAllBodyScrollLocks();
        // Scroll to the hashtag if the user is going back after visiting an anchor
        if (!url.includes('#')) {
            // Otherwise track the page instantly to the top of the new page.
            window.scroll(0, 0);
        }
    });

    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-K5HPMR' });

        const backgroundStringChromium = `background: url("data:image/svg+xml,%3Csvg width='691.88' height='240.661' viewBox='0 0 183.06 63.675' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='translate(.356 -.643) scale(.11111)'%3E%3Cpath d='m273 107.38-.44 240C159.07 347.12 67.26 255 67.47 141.5l.07-38.15' fill='%232f128d'/%3E%3Cpath d='M-3.2 169.29a128.51 128.51 0 0 1 128.6 128.42A128.51 128.51 0 0 1-3 426.31z' fill='%23251657'/%3E%3Cpath d='m695.59 222.77-65.84-16.15 16.1-66.02 65.84 16.14zM491.42 108.08l-65.18 18.62-18.57-65.37 65.18-18.62zm118.61 302.79-65.18 18.62-18.57-65.36 65.18-18.62z' fill='%232f128d'/%3E%3Cpath d='M439.9 168.09h67.78v67.97H439.9zm6.506 153.88 7.54-67.54 67.362 7.52-7.54 67.54zm87.3-199.43 67.45-6.673 6.692 67.64-67.45 6.672zm5.684 114.5 65.18-18.62 18.58 65.36-65.19 18.63z' fill='%23fd5765'/%3E%3Cpath d='M303 431.9h47.6a47.87 47.87 0 0 1-47.6 47.87h-.32a34.7 34.7 0 0 1 .26-69.4z' fill='%23e6e6e6'/%3E%3Cpath d='M302.42 364.91h67.27v67.46h-67.27z' fill='%232f128d'/%3E%3Ccircle cx='170.04' cy='108.47' r='102.68' fill='%232f128d'/%3E%3Cg fill='%23e6e6e6'%3E%3Crect transform='rotate(30 161.27 140.83)' x='95.63' y='41.29' width='131.26' height='199.05' rx='53.13'/%3E%3Crect transform='rotate(30 99.01 182.61)' x='66.4' y='98.23' width='65.22' height='168.76' rx='32.61'/%3E%3Cpath d='M122.74 88.52a27.32 27.32 0 0 0-27.32 47.31z'/%3E%3C/g%3E%3Ccircle cx='155.85' cy='118' r='7.54' fill='%23251657'/%3E%3Ccircle cx='203.5' cy='145.51' r='7.54' fill='%23251657'/%3E%3Cpath d='M127.41 179.18a20.13 20.13 0 1 0 34.86 20.13z' fill='%23fff'/%3E%3Cpath d='m172.93 183.4-18.36-10.6 16.71-28.95z' fill='%23fd5765'/%3E%3Cpath d='M222.77 53.54a80.66 80.66 0 0 1-110.18 29.52s13.17-49.6 59-59.08' fill='%232f128d'/%3E%3Cpath d='M221.1 54.92a60.11 60.11 0 0 0 22 82.11l17.41-59.36z' fill='%232f128d'/%3E%3C/g%3E%3Cg transform='translate(104.428 4.938) scale(.26458)'%3E%3Cpath d='M297.2 222c0-38.1-30.8-69-68.9-69.1s-69 30.8-69.1 68.9z' fill='%233beccd'/%3E%3Cpath d='M35.7 109.8h3.9v38h-3.9z' fill='%23231749'/%3E%3Cpath class='st2' d='m73.9 221.8.3-43.6 30.4.2-.3 43.6z'/%3E%3Cpath class='st2' d='M104.5 211.4c-6.8-.1-12.4-5.7-12.3-12.5.1-6.9 5.7-12.4 12.5-12.3S117 192.2 117 199c-.1 6.9-5.7 12.4-12.5 12.4z'/%3E%3Cpath class='st3' d='M37.7 128.6c-14.6 0-26.4 11.8-26.4 26.4h4.1v8.6c-8.8 1.9-15.4 9.7-15.4 19s6.6 17.1 15.4 19.1V222H60v-67.1h4c0-14.5-11.8-26.3-26.3-26.3zm-33.5 54c0-7 4.7-12.9 11.1-14.7v29.4c-6.4-1.8-11.1-7.7-11.1-14.7z'/%3E%3Ccircle class='st3' cx='37.7' cy='106.5' r='6.7'/%3E%3Ccircle class='st3' cx='232.6' cy='50.1' r='19.5'/%3E%3Cpath class='st3' d='M226.3 90.2c14.2 0 25.7-11.5 25.7-25.8h-25.7z'/%3E%3Cpath class='st4' d='M205.3 141h12.3c14.4 0 26.1-11.7 26.1-26.1V69.2c0-14.4-11.7-26.1-26.1-26.1h-12.3c-14.4 0-26.1 11.7-26.1 26.1v45.7c-.1 14.4 11.6 26.1 26.1 26.1z'/%3E%3Cpath class='st4' d='M227.7 172.5c8.9 0 16-7.2 16-16v-50.9c0-8.9-7.2-16-16-16-8.9 0-16 7.2-16 16v50.9c-.1 8.8 7.1 16 16 16z'/%3E%3Cpath class='st4' d='M240.7 77.6c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4z'/%3E%3Ccircle class='st3' cx='219.3' cy='81.9' r='3.7'/%3E%3Ccircle class='st3' cx='192.3' cy='81.9' r='3.7'/%3E%3Cpath class='st3' d='M243.7 118.7c0 17.8-14.5 32.3-32.3 32.3s-32.3-14.5-32.3-32.3z'/%3E%3Cpath d='M196 107.4h10.4V90.9z' fill='%23fd5765'/%3E%3Cpath class='st3' d='M179.2 112h64.6v8.2h-64.6zm11-46.4H252V48.9l-61.8-12z'/%3E%3Cpath d='M211.1 120.2c0 4.5-3.7 8.2-8.2 8.2s-8.2-3.7-8.2-8.2z' fill='%23fff'/%3E%3Cpath class='st2' d='M165.7 40c0 13.6 11 24.4 24.5 24.4V40z'/%3E%3Ccircle class='st3' cx='189.7' cy='40.5' r='25'/%3E%3C/g%3E%3Cstyle%3E.st2%7Bfill:%232f128d%7D.st3%7Bfill:%23251657%7D.st4%7Bfill:%23f4f3f6%7D%3C/style%3E%3C/svg%3E") left top no-repeat;`;
        const background = `${backgroundStringChromium} font-size: 200px; background-size: contain; background-color: transparent; margin: 8px 0 -32px 0;`;
        console.log('%c     ', background);

        const heading = `font-size: 16px; font-weight: bold; margin: 9px 0 3px 0;`;
        console.log('%cSpotted an Issue? 💻', heading);
        console.log(
            'The source code of this site is available at https://github.com/torchbox/careers\nPull requests & issues most welcome!',
        );
        console.log('%cGet in Touch 📬', heading);
        console.log(
            "You can email mailto://recruitment@torchbox.com for any careers enquiries\nWe're also on Twitter at https://twitter.com/torchbox",
        );
    }, []);

    return (
        <>
            <Head>
                <title>Torchbox Careers</title>
                <meta
                    name="description"
                    content="Are you a talented digital designer, UX consultant, Django engineer, search specialist or digital marketer? Then check out our jobs - we'd love to hear from you! Oxford, Bristol or remote."
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="preload"
                    href="/careers/fonts/apercu/apercu-light-pro.woff2"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/careers/fonts/apercu/apercu-regular-pro.woff2"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/careers/fonts/apercu/apercu-bold-pro.woff2"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/careers/fonts/apercu/apercu-black-pro.woff2"
                    as="font"
                    crossOrigin=""
                />
            </Head>

            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default MyApp;
